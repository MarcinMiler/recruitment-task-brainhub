import { createReducer } from 'typesafe-actions'

import { AppActions } from 'config/rootAction'
import { Notification } from './notification.model'
import * as actions from './notification.actions'

export interface NotificationState {
    notifications: Notification[]
}

export const defaultNotificationState = {
    notifications: []
}

export const notificationReducer = createReducer<NotificationState, AppActions>(
    defaultNotificationState
)
    .handleAction(actions.showNotification, (state, action) => ({
        notifications: [...state.notifications, action.payload]
    }))
    .handleAction(actions.closeNotification, (state, action) => ({
        notifications: state.notifications.filter(
            notification => notification.id !== action.payload
        )
    }))
