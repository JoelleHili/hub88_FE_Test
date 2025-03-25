import { useEffect } from "react"

interface IUseDebounceFunction {
    task: () => void
    delay?: number
}

const useDebounceFunction = ({ task, delay = 300 }: IUseDebounceFunction) => {
    useEffect(() => {
        const debounceFunction = setTimeout(() => {
            task()
        }, delay)

        return () => clearTimeout(debounceFunction)
    }, [task, delay])
}

export default useDebounceFunction