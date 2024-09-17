/* eslint-disable react/prop-types */
import withSkeleton from "../../helpers/HOCs/withSkeleton";
import NewsBanner from "../NewsBanner/NewsBanner";
import styles from './styles.module.css'


const BannersList = ({ banners }) => {

    return (
        <ul className={styles.banners}>
            {banners?.map(banner => {
                return <NewsBanner key={banner.id} item={banner} />
            })}
        </ul>
    );
};
const NewsBannerWithSkeleton = withSkeleton(BannersList, 'banner', 9, 'row')
export default NewsBannerWithSkeleton;