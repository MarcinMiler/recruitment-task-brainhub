import { Epic } from 'config/rootEpic'
import { isActionOf } from 'typesafe-actions'
import { combineEpics } from 'redux-observable'
import { switchMap, filter, pluck, mergeMap } from 'rxjs/operators'
import * as E from 'fp-ts/lib/Either'

import { AppActions } from 'config/rootAction'
import { EventService } from './event.service'
import * as actions from './event.actions'
import { NotificationService } from 'common/services/notification'

export const eventEpicFactory = (
    eventService: EventService,
    notification: NotificationService
) => {
    const newEventEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.newEventAsync.request)),
            pluck('payload'),
            switchMap(data => eventService.newEvent(data)),
            mergeMap(
                E.fold<string, void, AppActions[]>(
                    err => [
                        actions.newEventAsync.failure(err),
                        notification.failureNotification(err)
                    ],
                    () => [
                        actions.newEventAsync.success(),
                        notification.succeedNotification(
                            'Successfully saved event.'
                        )
                    ]
                )
            )
        )

    return combineEpics(newEventEpic)
}
