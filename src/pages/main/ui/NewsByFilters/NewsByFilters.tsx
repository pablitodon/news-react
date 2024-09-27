
import { useAppSelector } from '@/app/appStore';
import { useDebounce } from '@/shared/hooks/useDebounce';
import styles from './styles.module.css'
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import { NewsFilters } from '@/widgets/news';
import NewsListWithPagination from '../NewsListWithPagination/NewsListWithPagination';


const NewsByFilters = () => {

    const filters = useAppSelector((state) => state.news.filters);
    const debouncedKeywords = useDebounce(filters.keywords, 1500);
    const { data, isLoading } = useGetNewsQuery({ ...filters, keywords: debouncedKeywords });
    const { data: dataCategories } = useGetCategoriesQuery(null);

    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} dataCategories={dataCategories?.categories || []} />
            <NewsListWithPagination isLoading={isLoading} filters={filters} news={data?.news || []} />
        </section>
    );
};

export default NewsByFilters;


