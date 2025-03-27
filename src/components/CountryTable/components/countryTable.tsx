import { useEffect, useState } from "react"
import { ICountry } from "../types/countryTypes"
import { Table } from "../.."
import getCountriesQuery from "../helpers/getCountriesQuery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useQuery } from "@apollo/client"

const CountryTable: React.FC = () => {
    const [countries, setCountries] = useState<ICountry[]>([])
    const [searchValue, setSearchValue] = useState<string>("")
    const [result, setResult] = useState<ICountry[]>([])
    const [pageData, setPageData] = useState<ICountry[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 7

    const { loading, error, data } = useQuery(getCountriesQuery)

    useEffect(() => {
        if (data && data.countries) {
            setCountries(data.countries)
            setResult(data.countries)
            setPageData(data.countries.slice(0, pageSize))
        }
    }, [data])

    const handleSearchChange = (value: string) => {
        const filtered = countries.filter((country) => country.code.includes(value))
        console.log("Countries:", countries)
        console.log("Filtered:", filtered)
        setResult(filtered)
        setCurrentPage(1)
        setPageData(filtered.slice(0, pageSize))
        setSearchValue(value.replace(/[^A-Za-z]/g, "").toUpperCase())
    }

    const handleChangePage = (newValue: number) => {
        const totalPages = Math.ceil(result.length / pageSize)
        if (newValue >= 1 && newValue <= totalPages) {
            setCurrentPage(newValue)
            setPageData(result.slice((newValue - 1) * pageSize, newValue * pageSize))
        }
    }

    return (
        <div className="country-table">
            <div className="country-table__query">
                <p>Filter By Country Code:</p>
                <FontAwesomeIcon className="country-table__query__icon" icon={faMagnifyingGlass} />
                <input
                    className="country-table__query__filter"
                    placeholder="Country Code"
                    maxLength={2}
                    type="text"
                    value={searchValue}
                    onChange={(e) => handleSearchChange(e.target.value.toUpperCase())} />
            </div>
            <>

                {loading && <p className="country-table__loading">Loading...</p>}
                {error && <p className="country-table__error">Error: {error.message}</p>}
                {data && <Table<ICountry> data={pageData} />}
            </>
            <div className="country-table__pagination">
                <button
                    className={`country-table__pagination__button ${currentPage <= 1 ? "disabled" : ""}`}
                    onClick={() => handleChangePage(currentPage - 1)}
                    aria-label="Prev Page"
                    disabled={currentPage <= 1}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <span className="country-table__pagination__number">
                    {`Page ${currentPage} of ${Math.ceil(result.length / pageSize)}`}
                </span>

                <button
                    className={`country-table__pagination__button ${currentPage >= Math.ceil(result.length / pageSize) ? "disabled" : ""}`}
                    onClick={() => handleChangePage(currentPage + 1)}
                    aria-label="Next Page"
                    disabled={currentPage >= Math.ceil(result.length / pageSize)}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    )
}

export default CountryTable
