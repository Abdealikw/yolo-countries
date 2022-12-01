import { ListCountries } from '../../services/country-service/__generated__/ListCountries'

export interface IHomePageState extends ListCountries {
    isLoading: boolean
    searchInputValue: string
}
