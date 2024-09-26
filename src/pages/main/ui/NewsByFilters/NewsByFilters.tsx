
import { useAppSelector, useAppDispatch } from '@/app/appStore';
import { TOTAL_PAGES } from '@/shared/constants/constants';
import NewsList from '@/widgets/news/ui/NewsList/NewsList';
import PaginationWrapper from '@/features/pagination/ui/PaginationWrapper/Pagination';
import { useDebounce } from '@/shared/hooks/useDebounce';
import NewsFilters from '../NewsFilters/NewsFilters';
import styles from './styles.module.css'
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { getFilters } from '@/entities/news/model/newsSlice';


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


