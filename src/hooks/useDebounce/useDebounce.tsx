import { useEffect, useState } from "react"

interface IUseDebounce {
    value: string | number
    delay?: number
}

const useDebounce = ({ value, delay = 300 }: IUseDebounce) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const debounceFunction = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => clearTimeout(debounceFunction)
    }, [value, delay])

    return debounceValue
}

export default useDebounce