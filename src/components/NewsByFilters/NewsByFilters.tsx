/* eslint-disable react/prop-types */
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { PAGE_SIZE, TOTAL_PAGES } from '../constants/constants';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewsList';
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import styles from './styles.module.css'
import { useGetNewsQuery } from '../../services/newsApi';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getFilters } from '../../redux/slices/newsSlice';


const NewsByFilters = () => {

    const filters = useAppSelector((state) => state.news.filters);
    const dispatch = useAppDispatch();

    const debouncedKeywords = useDebounce(filters.keywords, 1500)
    const { data, isLoading } = useGetNewsQuery({ ...filters, keywords: debouncedKeywords })

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
    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} />
            <PaginationWrapper
                top
                bottom
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}
            >
                <NewsList isLoading={isLoading} news={data?.news} />
            </PaginationWrapper>
        </section>
    );
};

export default NewsByFilters;


