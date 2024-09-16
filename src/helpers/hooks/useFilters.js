/* eslint-disable no-unused-vars */
import { useState } from "react"

export const useFilters = (initialFilters) => {
    const [filters, setFilters] = useState(initialFilters);

    const changeFilter = (key, value) => {
        setFilters(prevState => {
            return { ...prevState, [key]: value }
        })
    }
    
    return {filters,changeFilter}
}