import { apolloClient } from '../../graphql'
import { FILTER_COUNTRIES, LIST_COUNTRIES } from './queries'
import { FilterCountries } from './__generated__/FilterCountries'
import { ListCountries } from './__generated__/ListCountries'

async function listCoutries(): Promise<ListCountries> {
    const response = await apolloClient.query({ query: LIST_COUNTRIES })
    return response.data
}

async function filterCountries(code: string): Promise<FilterCountries> {
    const response = await apolloClient.query({
        query: FILTER_COUNTRIES,
        variables: { code },
    })
    return response.data
}

const countryService = {
    listCoutries,
    filterCountries,
}

export default countryService
