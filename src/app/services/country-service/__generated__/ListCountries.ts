/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListCountries
// ====================================================

export interface ListCountries_countries {
  __typename: "Country";
  code: string;
  name: string;
}

export interface ListCountries {
  countries: ListCountries_countries[];
}
