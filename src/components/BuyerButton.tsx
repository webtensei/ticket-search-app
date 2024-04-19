import {ButtonHTMLAttributes, ReactNode} from 'react';

const BuyerButton = ({children, ...rest}:{children:ReactNode} & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button data-bid="buyer-button" className='min-w-[136px] text-white w-full md:max-w-fit font-medium bg-amber-500 hover:shadow-amber-200 hover:bg-amber-500/95 shadow-md shadow-amber-100 rounded px-4 py-2' {...rest}>
            {children}
        </button>
    );
};

export default BuyerButton;