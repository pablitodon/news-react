/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css'
import { getNews, getСategories } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import { useDebounce } from '../../helpers/hooks/useDebounce';


const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState('All');
    const [keyWords,setKeyWords] = useState('');
    console.log(keyWords);
    

    const totalPages = 10;
    const pageSize = 10;
    const debouncedKeywords = useDebounce(keyWords,1500)


    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true)
            const response = await getNews({
                page_number: currentPage,
                page_size: pageSize,
                category: selectedCategories === 'All' ? null : selectedCategories,
                keywords:keyWords
            });
            setNews(response.news)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    const fetchCategories = async () => {
        try {
            const response = await getСategories();
            setCategories(['All', ...response.categories])
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        fetchNews(currentPage)
    }, [currentPage, selectedCategories,debouncedKeywords])


    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevState => prevState + 1)
        }
    }
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevState => prevState - 1)
        }
    }
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    return (
        <main className={styles.main}>
            <Categories
                categories={categories}
                setSelectedCategories={setSelectedCategories}
                selectedCategories={selectedCategories}
            />
            <Search keywords ={keyWords} setKeyWords = {setKeyWords}/>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
            ) : (
                <Skeleton count={1} type={'banner'} />
            )}
            <Pagination
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                totalPages={totalPages}
                currentPage={currentPage}
            />
            {!isLoading ? (
                <NewsList news={news} />
            ) : (
                <Skeleton type={'item'} count={10} />)
            }
            <Pagination
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                totalPages={totalPages}
                currentPage={currentPage}
            />
        </main>
    );
};

export default Main;
