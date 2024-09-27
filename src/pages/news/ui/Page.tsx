/* eslint-disable no-unused-vars */

import { useAppSelector } from '@/app/appStore';
import styles from './styles.module.css'
import { Link } from 'react-router-dom';
import { NewsDetails } from '@/entities/news';

const NewsPage = () => {
    const { currentNews } = useAppSelector(state => state.news)
    if (!currentNews) {
        return <div>
            <h1>Cannot Find News</h1>
            <Link to='/'>
                <h3 className={styles.title}>Go to Main page</h3>
            </Link>
        </div>
    }
    return (
        <main className={styles.news}>
            <h1>{currentNews.title}</h1>
            <NewsDetails item={currentNews} />
        </main>
    );
};

export default NewsPage;
