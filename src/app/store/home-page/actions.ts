import { createAsyncThunk } from '@reduxjs/toolkit'
import countryService from '../../services/country-service'

export const getCountries = createAsyncThunk('home/getCountries', async () => {
    const res = await countryService.listCoutries()
    return res.countries
})
export const getCountriesByCode = createAsyncThunk(
    'home/getCountriesByCode',
    async (code: string) => {
        const res = await countryService.filterCountries(code)
        return res.countries
    },
)
