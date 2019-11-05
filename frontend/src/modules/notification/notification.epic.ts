import { filter, pluck, map, delay } from 'rxjs/operators'
import { combineEpics } from 'redux-observable'
import { isOfType } from 'typesafe-actions'

import { Epic } from 'config/rootEpic'
import * as actions from './notification.actions'

export const notificationEpicFactory = (): Epic => {
    const notificationEpic: Epic = action$ =>
        action$.pipe(
            filter(isOfType(actions.SHOW_NOTIFICATION)),
            delay(6000),
            pluck('payload', 'id'),
            map(actions.closeNotification)
        )

    return combineEpics(notificationEpic)
}
