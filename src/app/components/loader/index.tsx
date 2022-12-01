export const LOADER_TEST_ID = 'LOADER_TEST_ID'

export default function Loader() {
    return (
        <div data-testid={LOADER_TEST_ID} className="flex justify-center items-center">
            <div
                className="animate-ping w-5 h-5 bg-current mx-2 rounded-full text-blue-300"
                role="status"
            ></div>
            <div
                className="animate-ping w-5 h-5 bg-current mx-2 rounded-full text-blue-300"
                role="status"
            ></div>
            <div
                className="animate-ping w-5 h-5 bg-current mx-2 rounded-full text-blue-300"
                role="status"
            ></div>
        </div>
    )
}
