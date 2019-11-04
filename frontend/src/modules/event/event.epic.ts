import { Epic } from 'config/rootEpic'
import { isActionOf } from 'typesafe-actions'
import { combineEpics } from 'redux-observable'
import { switchMap, map, catchError, filter, pluck } from 'rxjs/operators'
import { of } from 'rxjs'

import * as actions from './event.actions'
import { EventService } from './event.service'

export const eventEpicFactory = (eventService: EventService) => {
    const newEventEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.newEventAsync.request)),
            pluck('payload'),
            switchMap(data =>
                eventService.newEvent(data).pipe(
                    map(actions.newEventAsync.success),
                    catchError(err => of(actions.newEventAsync.failure()))
                )
            )
        )

    return combineEpics(newEventEpic)
}
