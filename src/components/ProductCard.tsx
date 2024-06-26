import { motion } from 'framer-motion'; 
import { SelectedPage } from '../types/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    img: string,
    title: string,
    description: string,
    setSelectedPage: (value: SelectedPage) => void; 
    selectedPage: SelectedPage
}

const ProductCard = ({img, title, description, selectedPage, setSelectedPage}: Props) => {
  return (
    <motion.div 
    animate={{ x: 50 }}
    className='mt-5 rounded-lg border-2 border-gray-100 px-5 py-6 items-center hover:shadow-2xl hover:opacity-75'
    whileHover={{scale:1.1}}
    >
        <div className='mb-4 flex flex-wrap justify-center'>
            <div className='  overflow-hidden w-full h-auto'>
              <img className='rounded-lg w-full h-auto' src={`${img}`}
              />
            </div>
            <h4 className='font-bold'>{title}</h4>
            <p className='my-3'>{description}</p>
            <AnchorLink
              className='text-sm font-bold text-black underline hover:text-secondary-500'
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href={`#${selectedPage}`}
            >
              <p>Learn More</p>
            </AnchorLink>
        </div>

    </motion.div>
  )
}

export default ProductCard