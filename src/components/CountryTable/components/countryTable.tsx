import client from "../../../api/apolloClient"
import { useEffect, useState } from "react"
import { ICountry } from "../types/countryTypes"
import { Table } from "../.."
import getCountriesQuery from "../helpers/getCountriesQuery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CountryTable: React.FC = () => {
    const [countries, setCountries] = useState<ICountry[]>([])
    const [searchValue, setSearchValue] = useState<string>("")
    const [result, setResult] = useState<ICountry[]>([])
    const [pageData, setPageData] = useState<ICountry[]>([])
    const [error, setError] = useState<string | null>(null)
    const [state, setState] = useState("loading")
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 7

    useEffect(() => {
        client
            .query({ query: getCountriesQuery })
            .then((response) => {
                const filterData = response.data.countries.map(({ __typename, ...rest }) => rest)
                setResult(filterData)
                setCountries(filterData)
                setPageData(filterData.slice(0, pageSize))
                setState("complete")
            })
            .catch((err) => {
                setError(err.message)
                setState("error")
            });
    }, []);

    const handleSearchChange = (value: string) => {
        const filtered = countries.filter((country) => country.code.includes(value))
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
    };

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
                {{
                    loading: (<p className="country-table__loading">Loading...</p>),
                    error: (<p className="country-table__error">Error: {error}</p>),
                    complete: (<Table<ICountry> data={pageData} />)
                }[state]}
            </>
            <div className="country-table__pagination">
                <FontAwesomeIcon
                    className={`country-table__pagination__button ${currentPage <= 1 && "disabled"}`}
                    icon={faChevronLeft}
                    onClick={() => handleChangePage(currentPage - 1)}
                    aria-hidden={currentPage <= 1}
                />
                <span
                    className="country-table__pagination__number">{`Page ${currentPage} of ${Math.ceil(result.length / pageSize)}`}
                </span>
                <FontAwesomeIcon
                    className={`country-table__pagination__button ${currentPage >= Math.ceil(result.length / pageSize) && "disabled"}`}
                    icon={faChevronRight}
                    onClick={() => handleChangePage(currentPage + 1)}
                    aria-hidden={currentPage >= Math.ceil(result.length / pageSize)}
                />
            </div>
        </div>
    );
}

export default CountryTable;
