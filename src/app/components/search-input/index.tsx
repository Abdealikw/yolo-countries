/** Customisable Search Input Component with left and right side Icon support */
import { SearchInputProps } from './types'

export const SEARCH_INPUT_CONTAINER_TEST_ID = 'SEARCH_INPUT_CONTAINER_TEST_ID' // ID to use for testing purposes only
export const SEARCH_INPUT_TEST_ID = 'SEARCH_INPUT_TEST_ID' // ID to use for testing purposes only

export default function SearchInput({
    label,
    leftIcon,
    rightIcon,
    ...inputProps
}: SearchInputProps) {
    return (
        <div data-testid={SEARCH_INPUT_CONTAINER_TEST_ID} className="flex items-center">
            <label htmlFor="text-search" className="sr-only">
                {label}
            </label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {leftIcon?.()}
                </div>
                <input
                    data-testid={SEARCH_INPUT_TEST_ID}
                    className="bg-white border border-gray-200 rounded-lg focus:border-primary block w-full pl-10 p-2.5"
                    type="text"
                    {...inputProps} // This will overide all previous props if given
                />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                    {rightIcon?.()}
                </button>
            </div>
        </div>
    )
}
