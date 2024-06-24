//import useMediaQuery from '../hooks/useMediaQuery';
import { SelectedPage } from '../types/types';
//import ActionButton from '../components/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import Link from '../components/Link';

import image1 from '../assets/images/backgroundImg.jpg'



type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ selectedPage, setSelectedPage }: Props) => {

  // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <section
      id='HOME'
      className='gap-16 bg-cover py-10 md:h-full md:pb-0'
      style={{
        backgroundImage:`url(${image1})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}
    >

      {/* IMAGE AND HEADER */}
      <motion.div 
        className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* HEADINGS */}
          <motion.div 
            className='md:-mt-20'
            initial='hidden'
            whileInView='visible'
            viewport={{once:true, amount: 0.5}}
            transition={{duration: 2}}
            variants={{
              hidden: {opacity: 0, x:-100},
              visible: {opacity: 1, x: 0}
            }}
            >
            <div className='relative'>
              <div>
                 {/* className='before:absolute before:-top-20 before:-left-10 before:z-[-1] md:before:content-evolvetext'  */}
                {/* <img className='h-[350px]' alt= "home-page-text" src={homeText2}/> */}
                <h1 className=' text-white font-extrabold font-montserrat text-center text-8xl border'>NEXT LEVEL LABS.</h1>
              </div>
            </div>
            <p className='mt-8 text-lg text-white font-extrabold'>
              Learn How To Safely & Effectively Extract, Refine, & Process Their Own Distillates.
              </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div 
            className='mt-8 flex items-center gap-8 md:justify-start'
            initial='hidden'
            whileInView='visible'
            viewport={{once:true, amount: 0.5}}
            transition={{delay: 0.3, duration: 1}}
            variants={{
              hidden: {opacity: 0, x:-50},
              visible: {opacity: 1, x: 0}
            }}
          >
            {/* <ActionButton setSelectedPage={setSelectedPage}>
              Contact Us
            </ActionButton> */}
            <motion.button
                className='rounded-md bg-secondary-500 px-10 py-2 text-black hover:bg-zinc-500 hover:text-white'
                whileHover={{scale:1.1}}
              >

                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </motion.button>
            <AnchorLink
              className='text-sm font-bold text-white underline hover:text-secondary-500'
              onClick={() => setSelectedPage(SelectedPage.AboutUs)}
              href={`${SelectedPage.AboutUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>


        {/* IMAGE */}
        {/* <motion.div 
          className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'
          initial='hidden'
          whileHover={{scale:1.1}}
          whileInView='visible'
          viewport={{once:true, amount: 0.5}}
          transition={{delay: 0.3, duration: 1}}
          variants={{
            hidden: {opacity: 0, x:100} ,
            visible: {opacity: 1, x: 0}
          }}
        >
          <img className='mt-16 rounded-lg h-[500px] w-full' alt='home-image' src={homeImange}/>
        </motion.div> */}
        

      </motion.div>
      {/* SPONSORS */}
      {/* {isAboveMediumScreens && (
         <div className='h-[150px] w-full py-10 bg-cover bg-center bg-no-repeat relative opacity-75' style={{backgroundImage: `url(${footHomeImg})`}}>
         <div className='absolute inset-0 opacity-75'></div>
         <div className='mx-auto flex items-center justify-center h-full'>
           <div className='text-white font-dmsans font-extrabold text-center'>
             <p className=' text-2xl'>GROW WITH US</p>
           </div>
         </div>
       </div>
        )}  */}
      

    </section>
  )
}

export default Home