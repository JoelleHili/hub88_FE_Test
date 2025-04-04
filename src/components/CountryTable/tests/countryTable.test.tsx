import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import CountryTable from "../../CountryTable"
import getCountriesQuery from "../helpers/getCountriesQuery"


const mocks = [
    {
        request: {
            query: getCountriesQuery
        },
        result: {
            data: {
                countries: [
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
                    },
                    {
                        "name": "Armenia",
                        "code": "AM"
                    },
                    {
                        "name": "Angola",
                        "code": "AO"
                    },
                    {
                        "name": "Antarctica",
                        "code": "AQ"
                    },
                    {
                        "name": "Argentina",
                        "code": "AR"
                    },
                    {
                        "name": "American Samoa",
                        "code": "AS"
                    },
                    {
                        "name": "Austria",
                        "code": "AT"
                    },
                    {
                        "name": "Australia",
                        "code": "AU"
                    },
                    {
                        "name": "Aruba",
                        "code": "AW"
                    },
                    {
                        "name": "Åland",
                        "code": "AX"
                    },
                    {
                        "name": "Azerbaijan",
                        "code": "AZ"
                    },
                    {
                        "name": "Bosnia and Herzegovina",
                        "code": "BA"
                    },
                    {
                        "name": "Barbados",
                        "code": "BB"
                    },
                    {
                        "name": "Bangladesh",
                        "code": "BD"
                    },
                    {
                        "name": "Belgium",
                        "code": "BE"
                    },
                    {
                        "name": "Burkina Faso",
                        "code": "BF"
                    },
                    {
                        "name": "Bulgaria",
                        "code": "BG"
                    },
                    {
                        "name": "Bahrain",
                        "code": "BH"
                    },
                    {
                        "name": "Burundi",
                        "code": "BI"
                    },
                    {
                        "name": "Benin",
                        "code": "BJ"
                    },
                    {
                        "name": "Saint Barthélemy",
                        "code": "BL"
                    },
                    {
                        "name": "Bermuda",
                        "code": "BM"
                    },
                    {
                        "name": "Brunei",
                        "code": "BN"
                    },
                    {
                        "name": "Bolivia",
                        "code": "BO"
                    },
                    {
                        "name": "Bonaire",
                        "code": "BQ"
                    },
                    {
                        "name": "Brazil",
                        "code": "BR"
                    },
                    {
                        "name": "Bahamas",
                        "code": "BS"
                    },
                    {
                        "name": "Bhutan",
                        "code": "BT"
                    },
                    {
                        "name": "Bouvet Island",
                        "code": "BV"
                    },
                    {
                        "name": "Botswana",
                        "code": "BW"
                    },
                    {
                        "name": "Belarus",
                        "code": "BY"
                    },
                    {
                        "name": "Belize",
                        "code": "BZ"
                    },
                    {
                        "name": "Canada",
                        "code": "CA"
                    },
                    {
                        "name": "Cocos [Keeling] Islands",
                        "code": "CC"
                    },
                    {
                        "name": "Democratic Republic of the Congo",
                        "code": "CD"
                    },
                    {
                        "name": "Central African Republic",
                        "code": "CF"
                    },
                    {
                        "name": "Republic of the Congo",
                        "code": "CG"
                    },
                    {
                        "name": "Switzerland",
                        "code": "CH"
                    },
                    {
                        "name": "Ivory Coast",
                        "code": "CI"
                    },
                    {
                        "name": "Cook Islands",
                        "code": "CK"
                    },
                    {
                        "name": "Chile",
                        "code": "CL"
                    },
                    {
                        "name": "Cameroon",
                        "code": "CM"
                    },
                    {
                        "name": "China",
                        "code": "CN"
                    },
                    {
                        "name": "Colombia",
                        "code": "CO"
                    },
                    {
                        "name": "Costa Rica",
                        "code": "CR"
                    },
                    {
                        "name": "Cuba",
                        "code": "CU"
                    },
                    {
                        "name": "Cape Verde",
                        "code": "CV"
                    },
                    {
                        "name": "Curacao",
                        "code": "CW"
                    },
                    {
                        "name": "Christmas Island",
                        "code": "CX"
                    },
                    {
                        "name": "Cyprus",
                        "code": "CY"
                    },
                    {
                        "name": "Czech Republic",
                        "code": "CZ"
                    },
                    {
                        "name": "Germany",
                        "code": "DE"
                    },
                    {
                        "name": "Djibouti",
                        "code": "DJ"
                    },
                    {
                        "name": "Denmark",
                        "code": "DK"
                    },
                    {
                        "name": "Dominica",
                        "code": "DM"
                    },
                    {
                        "name": "Dominican Republic",
                        "code": "DO"
                    },
                    {
                        "name": "Algeria",
                        "code": "DZ"
                    },
                    {
                        "name": "Ecuador",
                        "code": "EC"
                    },
                    {
                        "name": "Estonia",
                        "code": "EE"
                    },
                    {
                        "name": "Egypt",
                        "code": "EG"
                    },
                    {
                        "name": "Western Sahara",
                        "code": "EH"
                    },
                    {
                        "name": "Eritrea",
                        "code": "ER"
                    },
                    {
                        "name": "Spain",
                        "code": "ES"
                    },
                    {
                        "name": "Ethiopia",
                        "code": "ET"
                    },
                    {
                        "name": "Finland",
                        "code": "FI"
                    },
                    {
                        "name": "Fiji",
                        "code": "FJ"
                    },
                    {
                        "name": "Falkland Islands",
                        "code": "FK"
                    },
                    {
                        "name": "Micronesia",
                        "code": "FM"
                    },
                    {
                        "name": "Faroe Islands",
                        "code": "FO"
                    },
                    {
                        "name": "France",
                        "code": "FR"
                    },
                    {
                        "name": "Gabon",
                        "code": "GA"
                    },
                    {
                        "name": "United Kingdom",
                        "code": "GB"
                    },
                    {
                        "name": "Grenada",
                        "code": "GD"
                    },
                    {
                        "name": "Georgia",
                        "code": "GE"
                    },
                    {
                        "name": "French Guiana",
                        "code": "GF"
                    },
                    {
                        "name": "Guernsey",
                        "code": "GG"
                    },
                    {
                        "name": "Ghana",
                        "code": "GH"
                    },
                    {
                        "name": "Gibraltar",
                        "code": "GI"
                    },
                    {
                        "name": "Greenland",
                        "code": "GL"
                    },
                    {
                        "name": "Gambia",
                        "code": "GM"
                    },
                    {
                        "name": "Guinea",
                        "code": "GN"
                    },
                    {
                        "name": "Guadeloupe",
                        "code": "GP"
                    },
                    {
                        "name": "Equatorial Guinea",
                        "code": "GQ"
                    },
                    {
                        "name": "Greece",
                        "code": "GR"
                    },
                    {
                        "name": "South Georgia and the South Sandwich Islands",
                        "code": "GS"
                    },
                    {
                        "name": "Guatemala",
                        "code": "GT"
                    },
                    {
                        "name": "Guam",
                        "code": "GU"
                    },
                    {
                        "name": "Guinea-Bissau",
                        "code": "GW"
                    },
                    {
                        "name": "Guyana",
                        "code": "GY"
                    },
                    {
                        "name": "Hong Kong",
                        "code": "HK"
                    },
                    {
                        "name": "Heard Island and McDonald Islands",
                        "code": "HM"
                    },
                    {
                        "name": "Honduras",
                        "code": "HN"
                    },
                    {
                        "name": "Croatia",
                        "code": "HR"
                    },
                    {
                        "name": "Haiti",
                        "code": "HT"
                    },
                    {
                        "name": "Hungary",
                        "code": "HU"
                    },
                    {
                        "name": "Indonesia",
                        "code": "ID"
                    },
                    {
                        "name": "Ireland",
                        "code": "IE"
                    },
                    {
                        "name": "Israel",
                        "code": "IL"
                    },
                    {
                        "name": "Isle of Man",
                        "code": "IM"
                    },
                    {
                        "name": "India",
                        "code": "IN"
                    },
                    {
                        "name": "British Indian Ocean Territory",
                        "code": "IO"
                    },
                    {
                        "name": "Iraq",
                        "code": "IQ"
                    },
                    {
                        "name": "Iran",
                        "code": "IR"
                    },
                    {
                        "name": "Iceland",
                        "code": "IS"
                    },
                    {
                        "name": "Italy",
                        "code": "IT"
                    },
                    {
                        "name": "Jersey",
                        "code": "JE"
                    },
                    {
                        "name": "Jamaica",
                        "code": "JM"
                    },
                    {
                        "name": "Jordan",
                        "code": "JO"
                    },
                    {
                        "name": "Japan",
                        "code": "JP"
                    },
                    {
                        "name": "Kenya",
                        "code": "KE"
                    },
                    {
                        "name": "Kyrgyzstan",
                        "code": "KG"
                    },
                    {
                        "name": "Cambodia",
                        "code": "KH"
                    },
                    {
                        "name": "Kiribati",
                        "code": "KI"
                    },
                    {
                        "name": "Comoros",
                        "code": "KM"
                    },
                    {
                        "name": "Saint Kitts and Nevis",
                        "code": "KN"
                    },
                    {
                        "name": "North Korea",
                        "code": "KP"
                    },
                    {
                        "name": "South Korea",
                        "code": "KR"
                    },
                    {
                        "name": "Kuwait",
                        "code": "KW"
                    },
                    {
                        "name": "Cayman Islands",
                        "code": "KY"
                    },
                    {
                        "name": "Kazakhstan",
                        "code": "KZ"
                    },
                    {
                        "name": "Laos",
                        "code": "LA"
                    },
                    {
                        "name": "Lebanon",
                        "code": "LB"
                    },
                    {
                        "name": "Saint Lucia",
                        "code": "LC"
                    },
                    {
                        "name": "Liechtenstein",
                        "code": "LI"
                    },
                    {
                        "name": "Sri Lanka",
                        "code": "LK"
                    },
                    {
                        "name": "Liberia",
                        "code": "LR"
                    },
                    {
                        "name": "Lesotho",
                        "code": "LS"
                    },
                    {
                        "name": "Lithuania",
                        "code": "LT"
                    },
                    {
                        "name": "Luxembourg",
                        "code": "LU"
                    },
                    {
                        "name": "Latvia",
                        "code": "LV"
                    },
                    {
                        "name": "Libya",
                        "code": "LY"
                    },
                    {
                        "name": "Morocco",
                        "code": "MA"
                    },
                    {
                        "name": "Monaco",
                        "code": "MC"
                    },
                    {
                        "name": "Moldova",
                        "code": "MD"
                    },
                    {
                        "name": "Montenegro",
                        "code": "ME"
                    },
                    {
                        "name": "Saint Martin",
                        "code": "MF"
                    },
                    {
                        "name": "Madagascar",
                        "code": "MG"
                    },
                    {
                        "name": "Marshall Islands",
                        "code": "MH"
                    },
                    {
                        "name": "North Macedonia",
                        "code": "MK"
                    },
                    {
                        "name": "Mali",
                        "code": "ML"
                    },
                    {
                        "name": "Myanmar [Burma]",
                        "code": "MM"
                    },
                    {
                        "name": "Mongolia",
                        "code": "MN"
                    },
                    {
                        "name": "Macao",
                        "code": "MO"
                    },
                    {
                        "name": "Northern Mariana Islands",
                        "code": "MP"
                    },
                    {
                        "name": "Martinique",
                        "code": "MQ"
                    },
                    {
                        "name": "Mauritania",
                        "code": "MR"
                    },
                    {
                        "name": "Montserrat",
                        "code": "MS"
                    },
                    {
                        "name": "Malta",
                        "code": "MT"
                    },
                    {
                        "name": "Mauritius",
                        "code": "MU"
                    },
                    {
                        "name": "Maldives",
                        "code": "MV"
                    },
                    {
                        "name": "Malawi",
                        "code": "MW"
                    },
                    {
                        "name": "Mexico",
                        "code": "MX"
                    },
                    {
                        "name": "Malaysia",
                        "code": "MY"
                    },
                    {
                        "name": "Mozambique",
                        "code": "MZ"
                    },
                    {
                        "name": "Namibia",
                        "code": "NA"
                    },
                    {
                        "name": "New Caledonia",
                        "code": "NC"
                    },
                    {
                        "name": "Niger",
                        "code": "NE"
                    },
                    {
                        "name": "Norfolk Island",
                        "code": "NF"
                    },
                    {
                        "name": "Nigeria",
                        "code": "NG"
                    },
                    {
                        "name": "Nicaragua",
                        "code": "NI"
                    },
                    {
                        "name": "Netherlands",
                        "code": "NL"
                    },
                    {
                        "name": "Norway",
                        "code": "NO"
                    },
                    {
                        "name": "Nepal",
                        "code": "NP"
                    },
                    {
                        "name": "Nauru",
                        "code": "NR"
                    },
                    {
                        "name": "Niue",
                        "code": "NU"
                    },
                    {
                        "name": "New Zealand",
                        "code": "NZ"
                    },
                    {
                        "name": "Oman",
                        "code": "OM"
                    },
                    {
                        "name": "Panama",
                        "code": "PA"
                    },
                    {
                        "name": "Peru",
                        "code": "PE"
                    },
                    {
                        "name": "French Polynesia",
                        "code": "PF"
                    },
                    {
                        "name": "Papua New Guinea",
                        "code": "PG"
                    },
                    {
                        "name": "Philippines",
                        "code": "PH"
                    },
                    {
                        "name": "Pakistan",
                        "code": "PK"
                    },
                    {
                        "name": "Poland",
                        "code": "PL"
                    },
                    {
                        "name": "Saint Pierre and Miquelon",
                        "code": "PM"
                    },
                    {
                        "name": "Pitcairn Islands",
                        "code": "PN"
                    },
                    {
                        "name": "Puerto Rico",
                        "code": "PR"
                    },
                    {
                        "name": "Palestine",
                        "code": "PS"
                    },
                    {
                        "name": "Portugal",
                        "code": "PT"
                    },
                    {
                        "name": "Palau",
                        "code": "PW"
                    },
                    {
                        "name": "Paraguay",
                        "code": "PY"
                    },
                    {
                        "name": "Qatar",
                        "code": "QA"
                    },
                    {
                        "name": "Réunion",
                        "code": "RE"
                    },
                    {
                        "name": "Romania",
                        "code": "RO"
                    },
                    {
                        "name": "Serbia",
                        "code": "RS"
                    },
                    {
                        "name": "Russia",
                        "code": "RU"
                    },
                    {
                        "name": "Rwanda",
                        "code": "RW"
                    },
                    {
                        "name": "Saudi Arabia",
                        "code": "SA"
                    },
                    {
                        "name": "Solomon Islands",
                        "code": "SB"
                    },
                    {
                        "name": "Seychelles",
                        "code": "SC"
                    },
                    {
                        "name": "Sudan",
                        "code": "SD"
                    },
                    {
                        "name": "Sweden",
                        "code": "SE"
                    },
                    {
                        "name": "Singapore",
                        "code": "SG"
                    },
                    {
                        "name": "Saint Helena",
                        "code": "SH"
                    },
                    {
                        "name": "Slovenia",
                        "code": "SI"
                    },
                    {
                        "name": "Svalbard and Jan Mayen",
                        "code": "SJ"
                    },
                    {
                        "name": "Slovakia",
                        "code": "SK"
                    },
                    {
                        "name": "Sierra Leone",
                        "code": "SL"
                    },
                    {
                        "name": "San Marino",
                        "code": "SM"
                    },
                    {
                        "name": "Senegal",
                        "code": "SN"
                    },
                    {
                        "name": "Somalia",
                        "code": "SO"
                    },
                    {
                        "name": "Suriname",
                        "code": "SR"
                    },
                    {
                        "name": "South Sudan",
                        "code": "SS"
                    },
                    {
                        "name": "São Tomé and Príncipe",
                        "code": "ST"
                    },
                    {
                        "name": "El Salvador",
                        "code": "SV"
                    },
                    {
                        "name": "Sint Maarten",
                        "code": "SX"
                    },
                    {
                        "name": "Syria",
                        "code": "SY"
                    },
                    {
                        "name": "Swaziland",
                        "code": "SZ"
                    },
                    {
                        "name": "Turks and Caicos Islands",
                        "code": "TC"
                    },
                    {
                        "name": "Chad",
                        "code": "TD"
                    },
                    {
                        "name": "French Southern Territories",
                        "code": "TF"
                    },
                    {
                        "name": "Togo",
                        "code": "TG"
                    },
                    {
                        "name": "Thailand",
                        "code": "TH"
                    },
                    {
                        "name": "Tajikistan",
                        "code": "TJ"
                    },
                    {
                        "name": "Tokelau",
                        "code": "TK"
                    },
                    {
                        "name": "East Timor",
                        "code": "TL"
                    },
                    {
                        "name": "Turkmenistan",
                        "code": "TM"
                    },
                    {
                        "name": "Tunisia",
                        "code": "TN"
                    },
                    {
                        "name": "Tonga",
                        "code": "TO"
                    },
                    {
                        "name": "Turkey",
                        "code": "TR"
                    },
                    {
                        "name": "Trinidad and Tobago",
                        "code": "TT"
                    },
                    {
                        "name": "Tuvalu",
                        "code": "TV"
                    },
                    {
                        "name": "Taiwan",
                        "code": "TW"
                    },
                    {
                        "name": "Tanzania",
                        "code": "TZ"
                    },
                    {
                        "name": "Ukraine",
                        "code": "UA"
                    },
                    {
                        "name": "Uganda",
                        "code": "UG"
                    },
                    {
                        "name": "U.S. Minor Outlying Islands",
                        "code": "UM"
                    },
                    {
                        "name": "United States",
                        "code": "US"
                    },
                    {
                        "name": "Uruguay",
                        "code": "UY"
                    },
                    {
                        "name": "Uzbekistan",
                        "code": "UZ"
                    },
                    {
                        "name": "Vatican City",
                        "code": "VA"
                    },
                    {
                        "name": "Saint Vincent and the Grenadines",
                        "code": "VC"
                    },
                    {
                        "name": "Venezuela",
                        "code": "VE"
                    },
                    {
                        "name": "British Virgin Islands",
                        "code": "VG"
                    },
                    {
                        "name": "U.S. Virgin Islands",
                        "code": "VI"
                    },
                    {
                        "name": "Vietnam",
                        "code": "VN"
                    },
                    {
                        "name": "Vanuatu",
                        "code": "VU"
                    },
                    {
                        "name": "Wallis and Futuna",
                        "code": "WF"
                    },
                    {
                        "name": "Samoa",
                        "code": "WS"
                    },
                    {
                        "name": "Kosovo",
                        "code": "XK"
                    },
                    {
                        "name": "Yemen",
                        "code": "YE"
                    },
                    {
                        "name": "Mayotte",
                        "code": "YT"
                    },
                    {
                        "name": "South Africa",
                        "code": "ZA"
                    },
                    {
                        "name": "Zambia",
                        "code": "ZM"
                    },
                    {
                        "name": "Zimbabwe",
                        "code": "ZW"
                    }
                ],
            },
        },
    },
]

const errorMocks = [
    {
        request: {
            query: getCountriesQuery,
        },
        error: new Error("Network Error"),
    },
]

describe("CountryTable Component", () => {
    test("Render Success Test", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <CountryTable />
            </MockedProvider>
        )

        await waitFor(() => {
            expect(screen.getByText(/Page 1 of/i)).toBeInTheDocument()
        })
    })

    test("Loading State Test", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <CountryTable />
            </MockedProvider>
        )
        await waitFor(() => {
            expect(screen.getByText("Loading...")).toBeInTheDocument()
        })
    })

    test("Renders Error State Test", async () => {
        render(
            <MockedProvider mocks={errorMocks} addTypename={false}>
                <CountryTable />
            </MockedProvider>
        )

        await waitFor(() => {
            expect(screen.getByText("Loading...")).toBeInTheDocument()
        })

        await waitFor(() => {
            expect(screen.getByText(/Error:/i)).toBeInTheDocument()
        })
    })

    test("Search Test", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <CountryTable />
            </MockedProvider>
        )

        await waitFor(() => {
            expect(screen.getByText(/Page 1 of/i)).toBeInTheDocument()
        })
        
        await waitFor(() => expect(screen.getByPlaceholderText("Country Code")).toBeInTheDocument())

        const searchInput = screen.getByPlaceholderText("Country Code")
        fireEvent.change(searchInput, { target: { value: "MT" } })


        await waitFor(() => {
            // expect(screen.queryByText("Italy")).not.toBeInTheDocument()
            // expect(screen.queryByText("Morocco")).not.toBeInTheDocument()
            expect(screen.getByText("Malta")).toBeInTheDocument()
        })
    })

    test("Pagination Button Test", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <CountryTable />
            </MockedProvider>
        )

        await screen.findByText(/Page 1 of/i)

        const nextButton = screen.getByRole("button", { name: /next page/i })
        const prevButton = screen.getByRole("button", { name: /prev page/i })

        const pageNumberTest1 = await screen.findByText(/Page 1 of/i)
        expect(pageNumberTest1).toBeInTheDocument()

        expect(nextButton).toBeInTheDocument()
        expect(prevButton).toBeInTheDocument()

        expect(nextButton).not.toBeDisabled()
        expect(prevButton).toBeDisabled()

        fireEvent.click(nextButton)

        const pageNumberTest2 = await screen.findByText(/Page 2 of/i)
        expect(pageNumberTest2).toBeInTheDocument()

        expect(nextButton).not.toBeDisabled()
        expect(prevButton).not.toBeDisabled()

        fireEvent.click(prevButton)

        const pageNumberTest3 = await screen.findByText(/Page 1 of/i)
        expect(pageNumberTest3).toBeInTheDocument()

        expect(nextButton).not.toBeDisabled()
        expect(prevButton).toBeDisabled()
    })
})
