/* eslint-disable react/prop-types */
import { CategoriesApiResponse, IFilters } from '../../interfaces';
import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import styles from './styles.module.css'
import { useTheme } from '../context/ThemeContext';

interface Props {
    filters: IFilters;
    changeFilter: (key:string, value: string | number | null) => void;
}



const NewsFilters = ({ filters, changeFilter}: Props) => {
    const {isDark} = useTheme();
    const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(getCategories);
    return (
        <div className={styles.filters}>
            {
                dataCategories &&
                <Slider isDark= {isDark}>
                    <Categories
                        categories={dataCategories.categories}
                        setSelectedCategories={(category) => changeFilter('category', category)}
                        selectedCategories={filters.category}
                    />
                </Slider>
            }
            <Search keywords={filters.keywords} setKeyWords={(keywords) => changeFilter('keywords', keywords)} />
        </div>
    );
};

export default NewsFilters;     