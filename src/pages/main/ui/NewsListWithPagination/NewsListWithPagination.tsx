
import { TOTAL_PAGES } from '@/shared/constants/constants';
import NewsList from '@/widgets/news/ui/NewsList/NewsList';
import PaginationWrapper from '@/features/pagination/ui/PaginationWrapper/Pagination';
import { IFilters } from '@/shared/interfaces';
import { INews } from '@/entities/news';
import { usePaginationNews } from '../../utils/hooks/usePaginationNews';


interface Props {
    filters: IFilters;
    news: INews[];
    isLoading: boolean;
}

const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
    const { handleNextPage, handlePrevPage, handlePageClick } = usePaginationNews({ filters })
    return (
        <PaginationWrapper
            top
            bottom
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            handlePageClick={handlePageClick}
            totalPages={TOTAL_PAGES}
            currentPage={filters.page_number}
        >
            <NewsList
                direction='column'
                isLoading={isLoading}
                news={news}
            />
        </PaginationWrapper>
    );
};

export default NewsListWithPagination;


