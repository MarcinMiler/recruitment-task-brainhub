import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store } from 'config/store'
import { Home } from 'pages/home'
import * as serviceWorker from './serviceWorker'
import { GlobalStyles } from 'theme/GlobalStyles'

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyles />
        <Home />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
