import { useState } from "react";
export const useFilters = (initialFilters) => {
    const [filters, setFilters] = useState(initialFilters);
    const changeFilter = (key, value) => {
        setFilters(prevState => {
            return Object.assign(Object.assign({}, prevState), { [key]: value });
        });
    };
    return { filters, changeFilter };
};
