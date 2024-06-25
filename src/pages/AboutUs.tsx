import useMediaQuery from '../hooks/useMediaQuery'
import { SelectedPage } from '../types/types'
import aboutUsImg from '../assets/images/aboutusImg.jpg'
import aboutUsImg2 from '../assets/images/aboutusImg2.jpg'
import footImg from '../assets/images/leaves-varied-background.jpg'
import Htext from '../components/Htext'
import { motion } from 'framer-motion'
import { AboutUsType } from '../types/types'
import AboutUsCard from '../components/AboutUsCard'
import videoLeaf from '../assets/images/videoLeaf.mp4'


const aboutUs: Array<AboutUsType> = [
  {
    title: "title1",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel necessitatibus blanditiis adipisci maiores obcaecati provident ea atque dolorem fugiat quo laudantium illum, impedit nulla. Quasi id consectetur ratione voluptate autem.",
    image: aboutUsImg,
    video: videoLeaf
  },
  {
    title: "title2",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel necessitatibus blanditiis adipisci maiores obcaecati provident ea atque dolorem fugiat quo laudantium illum, impedit nulla. Quasi id consectetur ratione voluptate autem.",
    image: aboutUsImg2
  },
  {
    title: "title3",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel necessitatibus blanditiis adipisci maiores obcaecati provident ea atque dolorem fugiat quo laudantium illum, impedit nulla. Quasi id consectetur ratione voluptate autem.",
    image: aboutUsImg
  },
  {
    title: "title4",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel necessitatibus blanditiis adipisci maiores obcaecati provident ea atque dolorem fugiat quo laudantium illum, impedit nulla. Quasi id consectetur ratione voluptate autem.",
    image: aboutUsImg2
  },
  {
    title: "title5",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel necessitatibus blanditiis adipisci maiores obcaecati provident ea atque dolorem fugiat quo laudantium illum, impedit nulla. Quasi id consectetur ratione voluptate autem.",
    image: aboutUsImg
  }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const AboutUs = ({setSelectedPage}: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <section
      id='ABOUTUS'
      className='mx-auto min-h-full w-full pt-28 pb-0'
    >
      <motion.div
      className='mb-[250px]'
      onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
      >
        <motion.div
          className='mx-auto w-5/6'
          initial='hidden'
            whileInView='visible'
            viewport={{once:true, amount: 0.5}}
            transition={{delay: 0.3, duration: 1}}
            variants={{
              hidden: {opacity: 0, x:-50},
              visible: {opacity: 1, x: 0}
            }}
        >
          <div className='text-center mb-8'>
            <Htext>ABOUT US</Htext>
            <p className='py-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Vel necessitatibus blanditiis adipisci maiores obcaecati 
              provident ea atque dolorem fugiat quo laudantium illum, 
              impedit nulla. Quasi id consectetur ratione voluptate autem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Vel necessitatibus blanditiis adipisci maiores obcaecati 
              provident ea atque dolorem fugiat quo laudantium illum, 
              impedit nulla. Quasi id consectetur ratione voluptate autem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Vel necessitatibus blanditiis adipisci maiores obcaecati 
              provident ea atque dolorem fugiat quo laudantium illum, 
              impedit nulla. Quasi id consectetur ratione voluptate autem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Vel necessitatibus blanditiis adipisci maiores obcaecati 
              provident ea atque dolorem fugiat quo laudantium illum, 
              impedit nulla. Quasi id consectetur ratione voluptate autem.
            </p>
          </div>

        </motion.div>
        <div className='mt-10 h-[500px] w-full overflow-x-auto overflow-y-hidden'>
            <ul className='w-[2800px] whitespace-nowrap'>
              {aboutUs.map((item, index) => (
                <AboutUsCard
                  key={`${item.title}-${index}`}
                  title={item.title}
                  image={item.image}
                  description={`${item.description}`}
                  video={`${item.video}`}

                />
              ))}

            </ul>
        </div>

      </motion.div>
      
      {isAboveMediumScreens && (
         <div 
           className='mt-24 h-[150px] w-full py-10 bg-cover bg-center bg-no-repeat relative opacity-75' 
           style={{
            backgroundImage: `url(${footImg})`,
            backgroundSize:'cover',
            backgroundPosition:'center'
            }}>
         <div className='absolute inset-0'></div>
         <div className='mx-auto flex items-center justify-center h-full'>
           <div className='text-white font-dmsans font-extrabold text-center'>
             <p className=' text-2xl shadow-2xl shadow-black'>GROW WITH US</p>
           </div>
         </div>
       </div>
        )}
    </section>
  )
}

export default AboutUs