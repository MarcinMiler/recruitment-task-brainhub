import { createAction } from 'typesafe-actions'

import { Notification } from './notification.model'

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const showNotification = createAction(
    SHOW_NOTIFICATION,
    action => (payload: Notification) => action(payload)
)

export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION'
export const closeNotification = createAction(
    CLOSE_NOTIFICATION,
    action => (payload: string) => action(payload)
)
