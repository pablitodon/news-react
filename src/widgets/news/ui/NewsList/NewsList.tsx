
import { INews } from '@/entities/news';
import withSkeleton from '@/shared/HOCs/withSkeleton';
import styles from './styles.module.css';
import NewsCard from '@/entities/news/ui/NewsCard/NewsCard';
import { DirectionType, SkeletonType } from '@/shared/interfaces';

interface Props {
    news?: INews[];
    type?: SkeletonType;
    direction?: DirectionType;
}

const NewsList = ({ news, type = "item" }: Props) => {
    return (
        <div className={`${type === 'item' ? styles.items : styles.banners}`}>
            {news?.map(elem => <NewsCard key={elem.id} item={elem} type={type} />)}
        </div>
    );
};
const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10)
export default NewsListWithSkeleton;