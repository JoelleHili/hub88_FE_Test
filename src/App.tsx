import { Table } from "./components"
import { ICountry } from "./components/CountryTable/types/countryTypes"

const data: ICountry[] = [
  {
    "name": "Andorra",
    "code": "AD"
  },
  {
    "name": "United Arab Emirates",
    "code": "AE"
  },
  {
    "name": "Afghanistan",
    "code": "AF"
  },
  {
    "name": "Antigua and Barbuda",
    "code": "AG"
  },
  {
    "name": "Anguilla",
    "code": "AI"
  },
  {
    "name": "Albania",
    "code": "AL"
  }
]

const App = () => (
  <div className="page">
    <Table<ICountry> data={data} />
  </div>
)

export default App
