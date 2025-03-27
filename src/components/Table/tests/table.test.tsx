import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Table from "../../Table"
import { ICountry } from "../../CountryTable/types/countryTypes"

describe("Table Component", () => {
    test("Empty Data Test", () => {
        render(<Table data={[]} />)
        expect(screen.getByText("No data available")).toBeInTheDocument()
    })

    test("Header Render Test", () => {
        const testData = [{
            "name": "Andorra",
            "code": "AD"
        },
        {
            "name": "United Arab Emirates",
            "code": "AE"
        }]

        render(<Table<ICountry> data={testData} />)
        expect(screen.getByText("name")).toBeInTheDocument()
        expect(screen.getByText("code")).toBeInTheDocument()
    })

    test("Row Count Test", () => {
        const testData = [{
            "name": "Andorra",
            "code": "AD"
        },
        {
            "name": "United Arab Emirates",
            "code": "AE"
        }]

        render(<Table<ICountry> data={testData} />)
        expect(document.querySelectorAll(".table__row").length).toBe(2)
    })

    test("Column Count Test", () => {
        const testData = [{
            "name": "Andorra",
            "code": "AD"
        },
        {
            "name": "United Arab Emirates",
            "code": "AE"
        }]

        render(<Table<ICountry> data={testData} />)
        expect(document.querySelectorAll(".table__cell").length).toBe(4)
    })

    test("Divider Count Test", () => {
        const testData = [{
            "name": "Andorra",
            "code": "AD"
        },
        {
            "name": "United Arab Emirates",
            "code": "AE"
        }]

        render(<Table<ICountry> data={testData} />)
        expect(document.querySelectorAll(".table__divider").length).toBe(document.querySelectorAll(".table__row").length - 1)
        expect(document.querySelectorAll(".table__divider").length).toBe(1)
    })
})