/* eslint-disable no-unused-vars */
import styles from './styles.module.css'
import LatestNews from '../../components/LatestNews/LatestNews';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';


const Main = () => {
    // Выносим логику за пределы компонента

    return (
        <main className={styles.main}>
            <LatestNews />
            <NewsByFilters />
        </main>
    );
};

export default Main;
