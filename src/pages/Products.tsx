import Htext from '../components/Htext'
import ProductCard from '../components/ProductCard'
import productImg from '../assets/images/footHomeImg.jpg'
import { ProductType, SelectedPage } from '../types/types'
import {motion} from 'framer-motion'
import useMediaQuery from '../hooks/useMediaQuery';
import footHomeImg from '../assets/images/cannabisCultivation.jpg'
import productImg2 from '../assets/images/productImg2.png'
import productImg3 from '../assets/images/productImg3.png'


const products: Array<ProductType> = [
  {
    title: 'title1',
    img: productImg,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quos adipisci totam doloribus accusantium cumque sit placeat necessitatibus accusamus. Sed expedita temporibus blanditiis dolorem, qui corporis esse culpa id natus?',
  },
  {
    title: 'title2',
    img:productImg2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quos adipisci totam doloribus accusantium cumque sit placeat necessitatibus accusamus. Sed expedita temporibus blanditiis dolorem, qui corporis esse culpa id natus?'
  },
  {
    title: 'title3',
    img:productImg3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quos adipisci totam doloribus accusantium cumque sit placeat necessitatibus accusamus. Sed expedita temporibus blanditiis dolorem, qui corporis esse culpa id natus?'

  },
  {
    title: 'title4',
    img: productImg,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quos adipisci totam doloribus accusantium cumque sit placeat necessitatibus accusamus. Sed expedita temporibus blanditiis dolorem, qui corporis esse culpa id natus?'
  },
  {
    title: 'title5',
    img:productImg2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quos adipisci totam doloribus accusantium cumque sit placeat necessitatibus accusamus. Sed expedita temporibus blanditiis dolorem, qui corporis esse culpa id natus?'
  },
  {
    title: 'title6',
    img:productImg3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quos adipisci totam doloribus accusantium cumque sit placeat necessitatibus accusamus. Sed expedita temporibus blanditiis dolorem, qui corporis esse culpa id natus?'
  },
   
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void,
}

const Products = ({setSelectedPage}: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <section id='PRODUCTS' className='mx-auto min-h-full w-full pt-28 pb-16'>
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Products)}>
      {/* HEADER */}
      <div className='text-center mb-8'>
        <Htext>
          OUR 
          <span className=' text-amber-500'> PRODUCTS</span>
          </Htext>
      </div>

    {/* PRODUCTS */}
    <div className='flex flex-wrap justify-center gap-10 mr-12 px-10'>
      {products.map((product: ProductType) => (
        <div key={product.title} className='w-full md:w-1/4'>
          <ProductCard
            title={product.title}
            img={product.img}
            description={product.description}
            setSelectedPage={setSelectedPage}
          />
        </div>
      ))}
    </div>
  </motion.div>

  {isAboveMediumScreens && (
         <div className='mt-5 h-[150px] w-full py-10 bg-cover bg-center bg-no-repeat relative opacity-75' style={{backgroundImage: `url(${footHomeImg})`}}>
         <div className='absolute inset-0'></div>
         <div className='mx-auto flex items-center justify-center h-full'>
           <div className='text-white font-dmsans font-extrabold text-center'>
             <p className=' text-2xl'>GROW WITH US</p>
           </div>
         </div>
       </div>
        )}
</section>
  )
}

export default Products