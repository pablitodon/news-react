/* eslint-disable react/prop-types */
import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import styles  from './styles.module.css'

 
const NewsFilters = ({filters,changeFilter}) => {
    const { data: dataCategories } = useFetch(getCategories);
    return (
        <div className={styles.filters}>
              {
                dataCategories && <Categories
                    categories={dataCategories.categories}
                    setSelectedCategories={(category) => changeFilter('category', category)}
                    selectedCategories={filters.category}
                />
            }
            <Search keywords={filters.keywords} setKeyWords={(keywords) => changeFilter('keywords', keywords)} />
        </div>
    );
};

export default NewsFilters;