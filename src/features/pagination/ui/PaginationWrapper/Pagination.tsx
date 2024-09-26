/* eslint-disable react/prop-types */
import { IPaginationProps } from "../../model/types";
import PaginationButtons from "../PaginationButtons/PaginationButtons";

interface Props {
    top?: boolean;
    bottom?: boolean;
    children: React.ReactNode;
};

const Pagination = ({ top, bottom, children, ...paginationsProps }: Props & IPaginationProps) => {
    return (
        <>
            {top && <PaginationButtons {...paginationsProps} />}
            {children}
            {bottom && <PaginationButtons {...paginationsProps} />}
        </>
    );
};

export default Pagination;