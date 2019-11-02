import { ActionType } from 'typesafe-actions'

const rootAction = {}

export type AppActions = ActionType<typeof rootAction>
