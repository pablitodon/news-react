/* eslint-disable react/prop-types */
import { IFilters } from '../../interfaces';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import styles from './styles.module.css'
import { useTheme } from '../context/ThemeContext';
import { useGetCategoriesQuery } from '../../services/newsApi';
import { useAppDispatch } from '../../redux/store';
import { getFilters } from '../../redux/slices/newsSlice';

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