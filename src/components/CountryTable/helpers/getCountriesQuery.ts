import { gql } from "@apollo/client"

const getCountriesQuery = gql`
    query GetCountries {
        countries {
        name
        code
    }
  }
`

export default getCountriesQuery