/** Home Page Component */

export const HOME_PAGE_TEST_ID = 'HOME_PAGE_TEST_ID' // ID to use for testing purposes only

export default function Home() {
    return (
        <div data-testid={HOME_PAGE_TEST_ID} className="flex flex-col bg-white-100">
            Home
        </div>
    )
}
