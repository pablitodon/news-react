
import { useAppDispatch } from '@/app/appStore';
import { useTheme } from '@/app/providers/ThemeProvider';
import Categories from '@/features/category/ui/Categories/Categories';
import Search from '@/features/search/ui/Search/Search';
import Slider from '@/features/slider/ui/Slider/Slider';
import { IFilters } from '@/shared/interfaces';
import styles from './styles.module.css'

import { getFilters } from '@/entities/news/model/newsSlice';
import { CategoriesType } from '@/entities/category';

interface Props {
    filters: IFilters;
    dataCategories: CategoriesType[];
}

const NewsFilters = ({ filters, dataCategories }: Props) => {
    console.log(dataCategories);

    const dispatch = useAppDispatch();
    const { isDark } = useTheme();

    return (
        <div className={styles.filters}>
            {
                dataCategories &&
                <Slider isDark={isDark}>
                    <Categories
                        categories={dataCategories}
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