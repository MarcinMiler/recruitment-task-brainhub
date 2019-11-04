import { createAsyncAction } from 'typesafe-actions'

import { Event } from './event.model'

export const newEventAsync = createAsyncAction(
    'NEW_EVENT_REQUESTED',
    'NEW_EVENT_SUCCEED',
    'NEW_EVENT_FAILED'
)<Event, void, undefined>()
