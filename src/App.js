import React from 'react'
import { Provider } from 'react-redux';
import { Dogs } from './components/Dogs';
import { store } from './store/store';

export const App = () => {
    return (
        <Provider store={store}>
            <Dogs />
        </Provider>
    )
}

