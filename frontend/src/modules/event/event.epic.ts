import { Epic } from 'config/rootEpic'
import { isActionOf } from 'typesafe-actions'
import { combineEpics } from 'redux-observable'
import { switchMap, map, filter, pluck } from 'rxjs/operators'
import * as E from 'fp-ts/lib/Either'

import { AppActions } from 'config/rootAction'
import { EventService } from './event.service'
import * as actions from './event.actions'

export const eventEpicFactory = (eventService: EventService) => {
    const newEventEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.newEventAsync.request)),
            pluck('payload'),
            switchMap(data => eventService.newEvent(data)),
            map(
                E.fold<string, void, AppActions>(
                    actions.newEventAsync.failure,
                    actions.newEventAsync.success
                )
            )
        )

    return combineEpics(newEventEpic)
}
