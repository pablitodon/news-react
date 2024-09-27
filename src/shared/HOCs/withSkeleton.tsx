/* eslint-disable react/prop-types */
import { DirectionType, SkeletonType } from "../interfaces";
import Skeleton from "../ui/Skeleton/Skeleton";

interface Props {
    isLoading: boolean;
    direction?: DirectionType
    type?: SkeletonType,
}

const withSkeleton = <P extends object>(
    Component: React.ComponentType<P>,
    count?: number,
) => {
    return function WithSkeleton(props: Props & P) {

        const { isLoading, type = 'item', direction = 'column', ...restProps } = props;
        if (isLoading) {
            return <Skeleton
                count={count}
                type={type}
                direction={direction}
            />
        }
        return <Component type={type}{...(restProps as P)} />
    }
};

export default withSkeleton;