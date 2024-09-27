import { useAppDispatch } from "@/app/appStore";
import { getFilters } from "@/entities/news/model/newsSlice";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { IFilters } from "@/shared/interfaces";

interface Props {
    filters: IFilters;
}

export const usePaginationNews = ({ filters }: Props) => {
    const dispatch = useAppDispatch();

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            dispatch(
                getFilters({ key: 'page_number', value: filters.page_number + 1 })
            )
        }
    }
    const handlePrevPage = () => {
        if (filters.page_number > 1) {
            dispatch(
                getFilters({ key: 'page_number', value: filters.page_number - 1 })
            )
        }
    }
    const handlePageClick = (pageNumber: number) => {
        dispatch(
            getFilters({ key: 'page_number', value: pageNumber })
        )
    }


    return { handleNextPage, handlePrevPage, handlePageClick };
}

