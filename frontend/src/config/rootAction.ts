import { ActionType } from 'typesafe-actions'

import * as eventActions from 'modules/event/event.actions'

const rootAction = {
    eventActions
}

export type AppActions = ActionType<typeof rootAction>
