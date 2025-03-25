import { gql } from "@apollo/client"

const getCountriesQuery = gql`
    query GetCountries {
        countries {
        code
        name
    }
  }
`

export default getCountriesQuery