/* eslint-disable react/prop-types */
import { INews } from "../../interfaces";
import withSkeleton from "../../helpers/HOCs/withSkeleton";
import NewsBanner from "../NewsBanner/NewsBanner";
import styles from './styles.module.css'

interface Props{
    banners?:INews[] | null;
}

const BannersList = ({ banners }:Props) => {
    
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