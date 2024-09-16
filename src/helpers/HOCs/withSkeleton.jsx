/* eslint-disable react/prop-types */
import Skeleton from "../../components/Skeleton/Skeleton";


const withSkeleton = (Component, type, count, direction) => {
    return function WithSkeleton(props) {
        const { isLoading, ...restProps } = props;

        if (isLoading) {
            return <Skeleton
                type={type}
                count={count}
                direction={direction}
            />
        }
        return <Component {...restProps} />
    }
};

export default withSkeleton;