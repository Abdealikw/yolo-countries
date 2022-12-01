import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App, { APP_TEST_ID } from './App'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from './app/graphql'
import { HOME_PAGE_TEST_ID } from './app/pages/home'
import { NAVBAR_TEST_ID } from './app/components/navbar'

test('renders Countries App Header', () => {
    render(
        <Provider store={store}>
            <ApolloProvider client={apolloClient}>
                <App />
            </ApolloProvider>
        </Provider>,
    )
    expect(screen.getByTestId(APP_TEST_ID)).toBeInTheDocument()
    expect(screen.getByTestId(NAVBAR_TEST_ID)).toBeInTheDocument()
    expect(screen.getByTestId(HOME_PAGE_TEST_ID)).toBeInTheDocument()
})
