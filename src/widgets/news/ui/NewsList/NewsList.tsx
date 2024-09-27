
import { INews } from '@/entities/news';
import withSkeleton from '@/shared/HOCs/withSkeleton';
import styles from './styles.module.css';
import NewsCard from '@/entities/news/ui/NewsCard/NewsCard';
import { DirectionType, SkeletonType } from '@/shared/interfaces';
import { ReactNode } from 'react';

interface Props {
    news?: INews[];
    type?: SkeletonType;
    direction?: DirectionType;
    viewNewsSlot?: (news: INews) => ReactNode
}

const NewsList = ({ news, type = "item", viewNewsSlot }: Props) => {
    return (
        <div className={`${type === 'item' ? styles.items : styles.banners}`}>
            {news?.map(elem =>
                <NewsCard
                    key={elem.id}
                    item={elem}
                    type={type}
                    viewNewsSlot={viewNewsSlot}
                />
            )}
        </div>
    );
};
const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10)
export default NewsListWithSkeleton;