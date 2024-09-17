/* eslint-disable react/prop-types */
import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import styles from './styles.module.css'


const NewsFilters = ({ filters, changeFilter }) => {
    const { data: dataCategories } = useFetch(getCategories);
    return (
        <div className={styles.filters}>
            {
                dataCategories &&
                <Slider>
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