/* eslint-disable no-unused-vars */

import LatestNews from './LatestNews/LatestNews';
import styles from './styles.module.css'
import NewsByFilters from '@/pages/main/ui/NewsByFilters/NewsByFilters';

const MainPage = () => {
    // Выносим логику за пределы компонента
    return (
        <main className={styles.main}>
            <LatestNews />
            <NewsByFilters />
        </main>
    );
};

export default MainPage;
