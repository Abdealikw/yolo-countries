/** Home Page Component */

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getCountries, getCountriesByCode } from '../../store/home-page/actions'
import { Table } from '../../components'
import { selectCountries, selectSearchInputValue } from '../../store/home-page/homePageSlice'
import SearchSection from './search-section'

export const HOME_PAGE_TEST_ID = 'HOME_PAGE_TEST_ID' // ID to use for testing purposes only

export default function Home() {
    const dispatch = useAppDispatch()
    const searchedCode = useAppSelector(selectSearchInputValue)
    const countries = useAppSelector(selectCountries)

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    useEffect(() => {
        dispatch(getCountriesByCode(searchedCode))
    }, [dispatch, searchedCode])

    return (
        <div
            data-testid={HOME_PAGE_TEST_ID}
            className="flex flex-col items-center justify-center bg-white-500"
        >
            <div className="flex flex-col w-full h-20 items-center justify-center">
                {/* This section will be used to take search string inputs */}
                <SearchSection />
            </div>
            <div className="flex flex-col w-full mt-5 items-center">
                <Table
                    headings={['Country Name', 'Country Code']}
                    dataKeys={['code', 'name']}
                    data={countries}
                />
            </div>
        </div>
    )
}
