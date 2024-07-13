import Htext from '../components/Htext'
import ProductCard from '../components/ProductCard'
import productImg from '../assets/images/productImg1.png'
import { ProductType, SelectedPage } from '../types/types'
import {motion} from 'framer-motion'
//import useMediaQuery from '../hooks/useMediaQuery';
import productImg2 from '../assets/images/productImg2.png'
import productImg3 from '../assets/images/productImg3.png'
import productImg5 from '../assets/images/productImg5.png'


const products: Array<ProductType> = [
  {
    title: 'ROSIN',
    img: productImg,
    description: 'Rosin is created through a gentle and solvent-free extraction process, using heat and pressure to extract the potent trichomes from the cannabis plant. The result? A sticky, translucent resin packed with cannabinoids, terpenes, and flavonoids that provide an exquisite taste and powerful effects.',
  },
  {
    title: 'DISTILLATE',
    img:productImg2,
    description: 'Next level labs specializes Short path distillation, wiped film distillation, scalable trim processing and much more. From beginning to end, we have your lab needs covered. Contact nextlevellabs to ensure maximum yields and quality every time!'
  },
  {
    title: 'BUDS',
    img:productImg3,
    description: 'We believe in starting with the best. Our distillates are meticulously crafted from premium cannabis buds known for their exceptional quality and potency. Hand-selected for their rich cannabinoid profiles and superior terpene content, these buds ensure that every drop of our distillates delivers a pure, consistent, and unforgettable experience.'

  },
  {
    title: 'LUCID DABS',
    img:productImg5,
    description:'Quick, easy and effective. Lucid Dabs by Next Level Labs is the every day dabbers solution to having the best experience possible. With Luer Lock technology our dab syringes never leak, preserving your product and preventing degradation. '
  }


   
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void,
}

const Products = ({setSelectedPage}: Props) => {

  //const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <section 
    id='products' 
    className='mx-auto bg-gradient-to-t from-black min-h-full w-full pt-28 pb-16' 
    // style={{
      //backgroundColor:'#D4FF19'
    //   backgroundImage:`url(${footHomeImg})`,
    //   backgroundPosition: 'center',
    //   backgroundSize: 'cover',
       //}}
    >
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Products)}>
      {/* HEADER */}
      <div className='text-center mb-8'>
        <Htext>
          OUR 
          <span className=' text-amber-500'> PRODUCTS</span>
          </Htext>
      </div>

    {/* PRODUCTS */}
    <div className='flex flex-wrap justify-center gap-10 mr-12 pr-11'>
      {products.map((product: ProductType) => (
        <div key={product.title} className='w-full md:w-1/4'>
          <ProductCard
            title={product.title}
            img={product.img}
            description={product.description}
            setSelectedPage={setSelectedPage}
            selectedPage={SelectedPage.Contact}
          />
        </div>
      ))}
    </div>
  </motion.div>

  {/* {isAboveMediumScreens && (
         <div className='mt-5 h-[150px] w-full py-10 bg-cover bg-center bg-no-repeat relative opacity-75' style={{backgroundImage: `url(${footHomeImg})`}}>
         <div className='absolute inset-0'></div>
         <div className='mx-auto flex items-center justify-center h-full'>
           <div className='text-white font-dmsans font-extrabold text-center'>
             <p className=' text-2xl'>GROW WITH US</p>
           </div>
         </div>
       </div>
        )} */}
</section>
  )
}

export default Products