import { gql } from '@apollo/client'

// GraphQL query that asks for names and codes for all countries
export const LIST_COUNTRIES = gql`
    query ListCountries {
        countries {
            code
            name
        }
    }
`
// GraphQL query that asks for names and codes for countries which matches a code
export const FILTER_COUNTRIES = gql`
    query FilterCountries($code: String!) {
        countries(filter: { code: { regex: $code } }) {
            code
            name
        }
    }
`
