import { INews, NewsBanner } from '@/entities/news';
import withSkeleton from '@/shared/HOCs/withSkeleton';
import styles from './styles.module.css'

interface Props {
    banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => {

    return (
        <ul className={styles.banners}>
            {banners?.map(banner => {
                return <NewsBanner key={banner.id} item={banner} />
            })}
        </ul>
    );
};
const NewsBannerWithSkeleton = withSkeleton<Props>(BannersList, 'banner', 10, 'row')
export default NewsBannerWithSkeleton;