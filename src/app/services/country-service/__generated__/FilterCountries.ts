/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FilterCountries
// ====================================================

export interface FilterCountries_countries {
  __typename: "Country";
  code: string;
  name: string;
}

export interface FilterCountries {
  countries: FilterCountries_countries[];
}

export interface FilterCountriesVariables {
  code: string;
}
