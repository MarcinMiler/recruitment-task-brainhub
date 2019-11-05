import { Epic as _Epic, combineEpics } from 'redux-observable'

import { eventEpicFactory } from 'modules/event/event.epic'
import { notificationEpicFactory } from 'modules/notification/notification.epic'
import { AppActions } from './rootAction'
import { eventService, notificationService } from './rootService'

export type Epic = _Epic<AppActions, AppActions>

export const rootEpic = combineEpics(
    eventEpicFactory(eventService, notificationService),
    notificationEpicFactory()
)
