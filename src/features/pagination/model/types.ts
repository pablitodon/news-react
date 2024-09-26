export interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  handleNextPage: () => void;
  handlePageClick: (pageNumber: number) => void;
  handlePrevPage: () => void;
}
