import { createAsyncAction } from 'typesafe-actions'

import { Event } from './event.model'

// There is a bug with typesafe-actions, there must exists action with undefined type on error type
export const newEventAsync1 = createAsyncAction(
    'NEW_EVENT_REQUESTED',
    'NEW_EVENT_SUCCEED',
    'NEW_EVENT_FAILED'
)<Event, void, undefined>()

export const newEventAsync = createAsyncAction(
    'NEW_EVENT_REQUESTED',
    'NEW_EVENT_SUCCEED',
    'NEW_EVENT_FAILED'
)<Event, void, string>()
