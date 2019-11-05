import { ActionType } from 'typesafe-actions'

import * as eventActions from 'modules/event/event.actions'
import * as notificationActions from 'modules/notification/notification.actions'

const rootAction = {
    eventActions,
    notificationActions
}

export type AppActions = ActionType<typeof rootAction>
