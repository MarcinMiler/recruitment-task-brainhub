import { Epic as _Epic, combineEpics } from 'redux-observable'

import { AppActions } from './rootAction'

export type Epic = _Epic<AppActions, AppActions>

export const rootEpic = combineEpics()
