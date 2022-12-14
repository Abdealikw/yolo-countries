/** Slice to manage app level search inputs */
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { getCountriesByCode } from './actions'
import { IHomePageState } from './types'

const reducerPath = 'home'

const initialState: IHomePageState = {
    isLoading: false,
    searchInputValue: '',
    countries: [],
}

export const homePageSlice = createSlice({
    name: reducerPath,
    initialState,
    reducers: {
        changeSearchInputValue: (state, action) => ({
            ...state,
            searchInputValue: action.payload,
        }),
    },
    extraReducers: builder => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(getCountriesByCode.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getCountriesByCode.fulfilled, (state, action) => {
                state.countries = action.payload !== null ? action.payload : []
                state.isLoading = false
            })
            .addCase(getCountriesByCode.rejected, (state, action) => {
                state.isLoading = false
            })
    },
})

const { actions } = homePageSlice
export const { changeSearchInputValue } = actions // Exporting Actions

// Selectors
export const selectSearchInputValue = (state: RootState) => state[reducerPath].searchInputValue
export const selectCountries = (state: RootState) => state[reducerPath].countries
export const selectIsLoading = (state: RootState) => state[reducerPath].isLoading
