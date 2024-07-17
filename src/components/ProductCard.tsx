import { motion } from 'framer-motion'; 
import { SelectedPage } from '../types/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    video?: string,
    img?: string,
    title: string,
    description: string,
    setSelectedPage: (value: SelectedPage) => void; 
    selectedPage: SelectedPage
}

const ProductCard = ({video, img, title, description, selectedPage, setSelectedPage}: Props) => {
  return (
    <motion.div 
    animate={{ x: 50 }}
    className='bg-white mt-5 rounded-lg border-2 border-gray-100 px-5 py-6 items-center hover:shadow-2xl flex flex-col justify-between'
    whileHover={{scale:1.1}}
  >
    <div className='mb-4 flex flex-wrap justify-center'>
      {video && (
        <div className='overflow-hidden w-full h-[250px] md:h-[400px]'>
          <video className='rounded-xl w-full h-full' autoPlay loop muted>
            <source src={video} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {img && (
        <div className='overflow-hidden w-full h-[250px] md:h-[400px]'>
          <img className='rounded-lg w-full h-full' src={img} alt={title} style={{objectFit: 'cover'}} />
        </div>
      )}
      <h4 className='font-bold pt-5'>{title}</h4>
      <p className='my-3 h-auto sm:h-40'>{description}</p>
      <AnchorLink
        className='text-xl font-bold text-amber-400 underline hover:text-black'
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