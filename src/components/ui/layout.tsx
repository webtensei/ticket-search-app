import {ReactNode} from "react";
import airplaneImage from '../../assets/airplane.png'
import {motion} from "framer-motion";

const Layout = ({children}: { children: ReactNode }) => {

    return (
        <div data-bid="layout" className='bg-gray-200 px-2 w-full min-h-screen pt-8 md:py-24 md:px-20 xl:p-24'>
            <motion.div
                data-bid="logo"
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                className='justify-center flex mb-4 min-h-16 md:min-h-24'>
                <img className='w-16 md:w-24' alt="Лого самолета" src={airplaneImage}/>
            </motion.div>
            {children}
        </div>
    );
};

export default Layout;