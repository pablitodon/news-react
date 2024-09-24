/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { IPaginationProps } from '../../interfaces';
import styles from './styles.module.css'
import { useTheme } from '../context/ThemeContext';


const Pagination = ({
    totalPages,
    handleNextPage,
    handlePrevPage,
    handlePageClick,
    currentPage,
}:IPaginationProps) => {
    const {isDark} = useTheme();
    return (
        <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
            <button
                disabled={currentPage <= 1}
                onClick={handlePrevPage}
                className={styles.arrow}
            >
                {`<`}
            </button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => {
                    return (
                        <button
                            onClick={() => handlePageClick(index + 1)}
                            className={styles.pageNumber}
                            key={index}
                            disabled={index + 1 === currentPage}
                        >
                            {index + 1}
                        </button>)
                })}
            </div>
            <button
                onClick={handleNextPage}
                className={styles.arrow}
                disabled={currentPage >= totalPages}
            >
                {`>`}
            </button>
        </div>
    );
};

export default Pagination;