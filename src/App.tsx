import './App.css'
import Navbar from './app/components/navbar'
import Routes from './app/routes'

export const APP_TEST_ID = 'APP_TEST_ID'

function App() {
    return (
        <div data-testid={APP_TEST_ID} className="mx-auto">
            <Navbar
                brandName="Yolo Group"
                logoUrl={'https://yolo.com/wp-content/themes/coingaming/img/coingaming.svg'}
            />
            <Routes />
        </div>
    )
}

export default App
