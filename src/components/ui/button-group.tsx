import {ButtonHTMLAttributes, ReactNode} from 'react';
import {ClassValue} from "clsx";
import {cn} from "../../utils/cn.ts";

export const ButtonGroup = ({children, className}: { children: ReactNode, className?: ClassValue }) => {
    return (
        <div data-bid="button-group"
             className={cn('inline-flex items-center justify-center h-auto [&>*:last-child]:border-l-0 [&>*:first-child]:border-r-0 [&>*:last-child]:rounded-r-md [&>*:first-child]:rounded-l-md', className)}>
            {children}
        </div>
    );
};


export const ButtonGroupItem = ({children, selected = false, ...rest}: {
    children: ReactNode,
    selected?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>) => {

    return (
        <button data-bid="button-group-item"
                className={cn('py-3 font-medium px-6 bg-gray-200 border border-gray-400', selected && 'text-white bg-sky-500 hover:bg-sky-500 border-sky-500', !selected && 'text-sky-500 hover:border-sky-500 hover:bg-sky-200')}
                {...rest}>
            {children}
        </button>
    )
}