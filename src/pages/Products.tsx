import Htext from '../components/Htext'
import ProductCard from '../components/ProductCard'
import { ProductType, SelectedPage } from '../types/types'
import {motion} from 'framer-motion'
//import useMediaQuery from '../hooks/useMediaQuery';
import videoExtraction from '../assets/videos/videoExtract.mp4'
import videoCultivation from '../assets/videos/videoCultivation.mp4'
import productImg2 from '../assets/images/retailImg2.jpg'
import productImg3 from '../assets/images/operationalImg.jpg'
import productImg5 from '../assets/images/imgEngineering.jpeg'


const products: Array<ProductType> = [
  {
    title: 'CANNABIS EXTRACTION',
    video: videoExtraction,
    description: 'Achieve superior purity and potency with our expertise in all forms of cannabis extraction, including bubble hash, ethanol extraction, distillation, and more.',
  },
  {
    title: 'LARGE SCALE FARMING AND GREENHOUSE',
    video: videoCultivation,
    description: 'Enhance your cultivation operations with advanced techniques for maximizing yield and quality in both large-scale outdoor farms and greenhouse environments.'
  },
  {
    title: 'RETAIL AND DISTRIBUTION CONSULTING',
    img:productImg2,
    description: 'Get comprehensive support for setting up and managing retail outlets, ensuring regulatory compliance, and securing efficient distribution channels for your cannabis products.'

  },
  {
    title: 'WHOLESALE AND WHITE LABELING SERVICES',
    img:productImg3,
    description:'Expand your brand with our high-quality, ready-to-sell cannabis products, tailored to your specifications for seamless market entry and growth.'
  },
  {
    title: 'ARCHITECT AND ENGINEERING DESIGN',
    img:productImg5,
    description:'Streamline your cannabis operations with our expert design and compliance solutions, ensuring swift and efficient approval and operational excellence.'
  }


   
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void,
}

const Products = ({setSelectedPage}: Props) => {

  //const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <section 
    id='services' 
    className='mx-auto bg-gradient-to-t from-black min-h-full w-full pt-28 pb-16' 
    // style={{
      //backgroundColor:'#D4FF19'
    //   backgroundImage:`url(${footHomeImg})`,
    //   backgroundPosition: 'center',
    //   backgroundSize: 'cover',
       //}}
    >
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Services)}>
      {/* HEADER */}
      <div className='text-center mb-8'>
        <Htext>
          OUR 
          <span className=' text-[#FF7F50]'> SERVICES</span>
          </Htext>
      </div>

    {/* PRODUCTS */}
    <div className='flex flex-wrap justify-center gap-10 mr-12 pr-11'>
      {products.map((product: ProductType) => (
        <div key={product.title} className='w-full md:w-1/4'>
          <ProductCard
            title={product.title}
            video={product.video}
            img={product.img}
            description={product.description}
            setSelectedPage={setSelectedPage}
            selectedPage={SelectedPage.Contact}
          />
        </div>
      ))}
    </div>
  </motion.div>

</section>
  )
}

export default Products