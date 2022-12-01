import { render, screen } from '@testing-library/react'
import SearchInput, { SEARCH_INPUT_CONTAINER_TEST_ID } from '.'

test('renders Search Input', () => {
    render(<SearchInput label="Search" />)
    expect(screen.getByTestId(SEARCH_INPUT_CONTAINER_TEST_ID)).toBeInTheDocument()
})
