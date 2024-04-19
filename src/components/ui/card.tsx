import {ReactNode} from 'react';
import {ClassValue} from "clsx";
import {cn} from "../../utils/cn.ts";

const Card = ({children, className}:{children:ReactNode, className?:ClassValue}) => {
    return (
        <div data-bid='card' className={cn('p-4 bg-white rounded-md shadow-md shadow-gray-300', className)}>
            {children}
        </div>
    );
};

export default Card;