import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Home, { HOME_PAGE_TEST_ID } from '.'
import { store } from '../../store'

test('renders home layout div', () => {
    render(
        <Provider store={store}>
            <Home />
        </Provider>,
    )
    expect(screen.getByTestId(HOME_PAGE_TEST_ID)).toBeInTheDocument()
})
