/* eslint-disable react/prop-types */
import styles  from './styles.module.css'


const Categories = ({categories,setSelectedCategories,selectedCategories}) => {
    return (
            <div className={styles.categories}>
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
};

export default Categories;