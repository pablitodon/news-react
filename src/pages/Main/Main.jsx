/* eslint-disable no-unused-vars */
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css'
import { getNews, getСategories } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { PAGE_SIZE, TOTAL_PAGES } from '../../components/constants/constants';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilters';


const Main = () => {
    // Вынес логику за пределы компонента

    const {filters,changeFilter} = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    })

    const debouncedKeywords = useDebounce(filters.keywords, 1500)

    const { data, isLoading} = useFetch(getNews, {
        ...filters,
        keywords: debouncedKeywords,
    });

    const { data: dataCategories } = useFetch(getСategories);

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            changeFilter('page_number', filters.page_number + 1)
        }
    }
    const handlePrevPage = () => {
        if (filters.page_number > 1) {
            changeFilter('page_number',filters.page_number - 1)
        }
    }
    const handlePageClick = (pageNumber) => {
        changeFilter('page_number', pageNumber)
    }

    return (
        <main className={styles.main}>
            {
                dataCategories && <Categories
                    categories={dataCategories.categories}
                    setSelectedCategories={(category) => changeFilter('category', category)}
                    selectedCategories={filters.category}
                />
            }
            <Search keywords={filters.keywords} setKeyWords={(keywords) => changeFilter('keywords', keywords)} />
            <NewsBanner isLoading={isLoading} item={data && data.news && data.news[0]} />
            <Pagination
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}
            />
            <NewsList isLoading={isLoading} news={data?.news} />

            <Pagination
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}
            />
        </main>
    );
};

export default Main;
