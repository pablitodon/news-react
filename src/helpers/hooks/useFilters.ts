/* eslint-disable no-unused-vars */
import { IFilters } from "../../interfaces";
import { useState } from "react"



export const useFilters = (initialFilters:IFilters) => {
    const [filters, setFilters] = useState<IFilters>(initialFilters);

    const changeFilter = (key:string, value:string|null|number) => {
        setFilters(prevState => {
            return { ...prevState, [key]: value }
        })
    }
    
    return {filters,changeFilter}
}