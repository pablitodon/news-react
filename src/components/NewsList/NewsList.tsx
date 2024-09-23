/* eslint-disable react/prop-types */
import withSkeleton from '../../helpers/HOCs/withSkeleton';
import { INews } from '../../interfaces';
import NewsItem from '../NewsItem/NewsItem';
import styles from './styles.module.css';




interface Props{
    news?:INews[];
}

const NewsList = ({ news }:Props) => {
    
    return (
        <div className={styles.list}>
            {news?.map(elem => <NewsItem key={elem.id} item={elem} />)}
        </div>
    );
};
const NewsListWithSkeleton = withSkeleton<Props>(NewsList,'item',10,'column')
export default NewsListWithSkeleton;