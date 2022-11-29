import './App.css'
import Routes from './app/routes'

export const APP_TEST_ID = 'APP_TEST_ID'

function App() {
    return (
        <div data-testid={APP_TEST_ID} className="mx-auto">
            <Routes />
        </div>
    )
}

export default App
