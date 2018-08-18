import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router-dom/Router'
import App from './app/App'
import getHistory from './store/getHistory'
import './scss/app.scss'

ReactDOM.render(
    <Router history={getHistory()}>
        <App/>
    </Router>,
    document.getElementById('root')
)
