import {InputHTMLAttributes, useId} from 'react';

const Select = ({label, onClick, ...rest}: { label?: string | number } & InputHTMLAttributes<HTMLInputElement>) => {
    const id = useId()

    return (
        <div data-bid="selector" className='inline-flex items-center align-middle gap-2 mb-0.5' onClick={onClick}>
            <input id={`default-checkbox-${id}`} className='bg-sky-600 scale-125' type='checkbox' {...rest}/>
            {label && <label htmlFor={`default-checkbox-${id}`} className='text-lg text-gray-600 font-thin'>{String(label)}</label>}
        </div>
    );
};

export default Select;