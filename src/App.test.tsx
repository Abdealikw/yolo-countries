import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App, { APP_TEST_ID } from './App'

test('renders Contries App Header', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
    )
    expect(screen.getByTestId(APP_TEST_ID)).toBeInTheDocument()
})
