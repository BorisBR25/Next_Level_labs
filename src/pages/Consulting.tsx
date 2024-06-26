import { motion } from "framer-motion"
import useMediaQuery from "../hooks/useMediaQuery"
import { SelectedPage } from "../types/types"
import VideoPlayer from "../components/VideoPlayer"
import video from '../assets/images/videoLeaf.mp4'
import Htext from "../components/Htext"
import footImg from '../assets/images/leaves-varied-background.jpg'

type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void;
}

const Consulting = ({setSelectedPage}: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <section 
    id='consulting'
    className='gap-16 bg-cover md:h-full pt-16 pb-16 '>

    
      <Htext>CONSULTING</Htext>

      {/* VIDEO */}
      <div className='z-10 mt-32 md:basis-3/5'>
        <motion.div
        className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Consuting)}
        >
          <motion.div
           className='w-full md:w-auto pb-10'
           initial='hidden'
           whileInView='visible'
           viewport={{once:true, amount: 0.5}}
           transition={{duration: 2}}
           variants={{
             hidden: {opacity: 0, x:-100},
             visible: {opacity: 1, x: 0}
           }}
          >
            <VideoPlayer
              videoUrl={video}
            />
          </motion.div>

          <motion.div
           className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-28 md:px-16 md:justify-items-end'
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
            <p className="py-5 text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Non officiis soluta qui labore corrupti atque perspiciatis 
              rerum. Nostrum incidunt possimus, molestiae, eum delectus 
              iste voluptates placeat velit dolore recusandae laboriosam?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Non officiis soluta qui labore corrupti atque perspiciatis 
              rerum. Nostrum incidunt possimus, molestiae, eum delectus 
              iste voluptates placeat velit dolore recusandae laboriosam?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Non officiis soluta qui labore corrupti atque perspiciatis 
              rerum. Nostrum incidunt possimus, molestiae, eum delectus 
              iste voluptates placeat velit dolore recusandae laboriosam?

              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Non officiis soluta qui labore corrupti atque perspiciatis 
              rerum. Nostrum incidunt possimus, molestiae, eum delectus 
              iste voluptates placeat velit dolore recusandae laboriosam?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Non officiis soluta qui labore corrupti atque perspiciatis 
              rerum. Nostrum incidunt possimus, molestiae, eum delectus 
              iste voluptates placeat velit dolore recusandae laboriosam?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Non officiis soluta qui labore corrupti atque perspiciatis 
              rerum. Nostrum incidunt possimus, molestiae, eum delectus 
              iste voluptates placeat velit dolore recusandae laboriosam?
            </p>
            
          </motion.div>


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
        
      </div>
      


    </section>
    
  )
}

export default Consulting