import { render, screen } from '@testing-library/react'
import Navbar, { NAVBAR_TEST_ID } from '.'
import logo from '../../../logo.svg'

test('renders Navbar', () => {
    render(<Navbar logoUrl={logo} brandName="Yolo Group" />)
    expect(screen.getByTestId(NAVBAR_TEST_ID)).toBeInTheDocument()
})
