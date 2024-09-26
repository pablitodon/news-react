
import { useAppDispatch } from '@/app/appStore';
import { useTheme } from '@/app/providers/ThemeProvider';
import Categories from '@/features/category/ui/Categories/Categories';
import Search from '@/features/search/ui/Search/Search';
import Slider from '@/features/slider/ui/Slider/Slider';
import { IFilters } from '@/shared/interfaces';
import styles from './styles.module.css'
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import { getFilters } from '@/entities/news/model/newsSlice';

interface Props {
    filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {

    const dispatch = useAppDispatch();
    const { isDark } = useTheme();
    const { data: dataCategories } = useGetCategoriesQuery(null)
    return (
        <div className={styles.filters}>
            {
                dataCategories &&
                <Slider isDark={isDark}>
                    <Categories
                        categories={dataCategories.categories}
                        setSelectedCategories={(category) => dispatch(getFilters({ key: 'category', value: category }))}
                        selectedCategories={filters.category}
                    />
                </Slider>
            }
            <Search keywords={filters.keywords} setKeyWords={(keywords) => dispatch(getFilters({ key: 'keywords', value: keywords }))} />
        </div>
    );
};

export default NewsFilters;     