/* eslint-disable react/prop-types */
import { useTheme } from "../context/ThemeContext";
import { IPaginationProps } from "../../interfaces";
import Pagination from "../Pagination/Pagination";
 
interface Props {
    top?:boolean;
    bottom?:boolean;
    children:React.ReactNode;
};
 
const PaginationWrapper = ({top,bottom,children,...paginationsProps}:Props & IPaginationProps) => {
    return (
        <>
         {top && <Pagination {...paginationsProps}/>}
         {children}
         {bottom && <Pagination {...paginationsProps}/>}
        </>
    );
};

export default PaginationWrapper;