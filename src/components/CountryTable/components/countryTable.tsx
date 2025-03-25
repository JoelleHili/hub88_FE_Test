import client from "../../../api/apolloClient"
import { useEffect, useState } from "react"
import { ICountry } from "../types/countryTypes"
import { Table } from "../.."
import getCountriesQuery from "../helpers/getCountriesQuery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const CountryTable: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [countries, setCountries] = useState<ICountry[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        client
            .query({ query: getCountriesQuery })
            .then((response) => {
                const filterData = response.data.countries.map(({ __typename, ...rest }) => rest)
                setCountries(filterData)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            });
    }, []);

    const handleSeachChange = (value: string) => {
        setSearchQuery(value)
    }
    return (
        <div className="country-table">
            <div className="country-table__query">
                <p>Filter By Country Code:</p>
                <FontAwesomeIcon className="country-table__query__icon" icon={faMagnifyingGlass} />
                <input className="country-table__query__filter" placeholder="Country Code" onChange={(e) => handleSeachChange(e.target.value.toUpperCase())} />
            </div>
            <>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {countries && <Table<ICountry> data={countries.filter((country) => country.code.match(searchQuery))} />}
            </>
        </div>
    )
}

export default CountryTable