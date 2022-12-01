import { render, screen } from '@testing-library/react'
import Table, { TABLE_TEST_ID } from '.'

test('renders Table', () => {
    render(<Table data={[]} dataKeys={[]} headings={[]} />)
    expect(screen.getByTestId(TABLE_TEST_ID)).toBeInTheDocument()
})
