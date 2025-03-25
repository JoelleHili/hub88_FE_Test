import client from "../../../api/apolloClient";
import { useEffect, useState } from "react";
import { ICountry } from "../types/countryTypes";
import { Table } from "../..";
import getCountriesQuery from "../helpers/getCountriesQuery";

const CountryTable: React.FC = () => {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        client
            .query({ query: getCountriesQuery })
            .then((response) => {
                const filterData = response.data.countries.map(({ __typename, ...rest }) => rest) //Filter Data
                setCountries(filterData);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="country-table">
            <>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {countries && <Table<ICountry> data={countries} />}
            </>
        </div>
    )
}

export default CountryTable