import { combineReducers } from 'redux'

import { notificationReducer } from 'modules/notification/notification.reducer'

export const rootReducer = combineReducers({
    notification: notificationReducer
})

export type AppState = ReturnType<typeof rootReducer>
