/* eslint-disable react/prop-types */
import { ForwardedRef, forwardRef } from 'react';
import styles  from './styles.module.css'
import { CategoriesType } from '../../interfaces';

interface Props {
    categories:CategoriesType[];
    setSelectedCategories:(category:CategoriesType| null) => void;
    selectedCategories:CategoriesType| null
}


const Categories = forwardRef(({categories,setSelectedCategories,selectedCategories}:Props,ref:ForwardedRef<HTMLDivElement>) => {
    return (
            <div ref={ref} className={styles.categories}>
                  <button
                            onClick={() => setSelectedCategories(null)}
                            className={!selectedCategories  ? styles.active : styles.item}
                            >
                            All
                            </button>
                {categories.map((category)=> {
                        return (
                            <button
                            onClick={() => setSelectedCategories(category)}
                            className={selectedCategories  === category ? styles.active : styles.item}
                            key={category}
                            >
                                {category}
                            </button>
                        )
                    })
                }
            </div>
    );
});
// т.к ругался и это помогает:
Categories.displayName = 'Categories'
export default Categories;