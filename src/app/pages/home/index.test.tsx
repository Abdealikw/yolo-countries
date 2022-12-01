import { ApolloProvider } from '@apollo/client'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import Home, { HOME_PAGE_TEST_ID } from '.'
import { LOADER_TEST_ID } from '../../components/loader'
import { SEARCH_INPUT_CONTAINER_TEST_ID, SEARCH_INPUT_TEST_ID } from '../../components/search-input'
import { TABLE_TEST_ID } from '../../components/table'
import { apolloClient } from '../../graphql'
import { store } from '../../store'

describe('Home Page', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <ApolloProvider client={apolloClient}>
                    <Home />
                </ApolloProvider>
            </Provider>,
        )
    })

    it('should show home page div', () => {
        expect(screen.getByTestId(HOME_PAGE_TEST_ID)).toBeInTheDocument()
    })
    it('should show search input', () => {
        expect(screen.getByTestId(SEARCH_INPUT_CONTAINER_TEST_ID)).toBeInTheDocument()
    })
    it('should show loader on start', () => {
        expect(screen.getByTestId(LOADER_TEST_ID)).toBeInTheDocument()
    })
    it('should display all countries on start', async () => {
        await waitFor(() => screen.getByTestId(TABLE_TEST_ID))
        expect(screen.getByTestId(TABLE_TEST_ID)).toBeInTheDocument()
        expect(screen.queryByTestId(LOADER_TEST_ID)).toBeNull()
        expect(screen.getByText(/Andorra/)).toBeInTheDocument()
        expect(screen.getByText(/Colombia/)).toBeInTheDocument()
    })
    it('should display all countries on based on search input', async () => {
        const searchInput = screen.getByTestId(SEARCH_INPUT_TEST_ID)
        expect(searchInput).toHaveDisplayValue('')
        fireEvent.change(searchInput, { target: { value: 'BR' } })
        await waitFor(() => screen.getByTestId(TABLE_TEST_ID))
        expect(screen.getByTestId(TABLE_TEST_ID)).toBeInTheDocument()
        expect(screen.queryByTestId(LOADER_TEST_ID)).toBeNull()
        expect(screen.getByText(/Brazil/)).toBeInTheDocument()
    })
})
