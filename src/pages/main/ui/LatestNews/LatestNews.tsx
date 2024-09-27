import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import styles from './styles.module.css'
import { NewsList } from '@/widgets/news';
import { INews } from '@/entities/news';
import { useAppDispatch } from '@/app/appStore';
import { getCurrentNews } from '@/entities/news/model/newsSlice';
import { useNavigate } from 'react-router-dom';



const LatestNews = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const { data, isLoading } = useGetLatestNewsQuery(null)


    const navigateTo = (news: INews) => {
        dispatch(getCurrentNews(news))
        navigate(`/news/${news.id}`)
    };

    return (
        <section className={styles.section}>
            <NewsList
                viewNewsSlot={(news: INews) => (
                    <p onClick={() => navigateTo(news)}>view more... </p>)
                }
                direction="row"
                type="banner"
                news={data && data.news}
                isLoading={isLoading} />
        </section>
    );
};

export default LatestNews; 