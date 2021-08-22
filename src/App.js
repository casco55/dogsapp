import React from 'react'
import { Provider } from 'react-redux';
import { Dogs } from './components/Dogs';
import { store } from './store/store';
import './style/style.css'

export const App = () => {
    return (
        <Provider store={store}>
            <Dogs />
        </Provider>
    )
}

