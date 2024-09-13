/* eslint-disable react/prop-types */
import NewsItem from '../NewsItem/NewsItem';
import styles from './styles.module.css'


const NewsList = ({ news }) => {
    return (
        <div className={styles.list}>
            {news.map(elem => <NewsItem key={elem.id} item={elem} />)}
        </div>
    );
};

export default NewsList;