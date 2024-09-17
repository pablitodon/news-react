/* eslint-disable no-unused-vars */
import styles from './styles.module.css'
import { getNews} from '../../api/apiNews';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { PAGE_SIZE, TOTAL_PAGES } from '../../components/constants/constants';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilters';
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
