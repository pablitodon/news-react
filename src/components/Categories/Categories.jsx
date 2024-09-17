/* eslint-disable react/prop-types */
import { forwardRef } from 'react';
import styles  from './styles.module.css'


const Categories = forwardRef(({categories,setSelectedCategories,selectedCategories},ref) => {
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