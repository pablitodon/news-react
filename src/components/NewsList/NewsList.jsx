/* eslint-disable react/prop-types */
import withSkeleton from '../../helpers/HOCs/withSkeleton';
import NewsItem from '../NewsItem/NewsItem';
import styles from './styles.module.css'


const NewsList = ({ news }) => {
    return (
        <div className={styles.list}>
            {news.map(elem => <NewsItem key={elem.id} item={elem} />)}
        </div>
    );
};
const NewsListWithSkeleton = withSkeleton(NewsList,'item',10)
export default NewsListWithSkeleton;