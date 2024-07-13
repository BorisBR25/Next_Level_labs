import { SelectedPage } from '../types/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import Htext from '../components/Htext';
import contactImg from '../assets/images/evolveImg.png'


type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {

  const inputStyle = `mb-5 w-full rounded-lg bg-gray-600 px-5 py-3 placeholder-white text-white cursor-white`

  const {
    register,
    trigger,
    formState: {errors}
  }  = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section
        id='contact' className='mx-auto w-5/6 pt-24 pb-32'
        
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        >
            {/* HEADERS */}
            <motion.div
                className='md:w-3/5'
                 initial='hidden'
                 whileInView='visible'
                 viewport={{once:true, amount: 0.5}}
                 transition={{duration: 1}}
                 variants={{
                   hidden: {opacity: 0, x:-50},
                   visible: {opacity: 1, x: 0}
                 }}
            >
              <Htext>
                <span className=' text-amber-500'>LET US</span> HELP YOU
              </Htext>
              <p className='my-5 text-black'>
              Welcome to NEXT LEVEL LABS, where innovation meets precision in 
              cannabis distillation and refinement. Whether you're a 
              seasoned industry player or just starting out, our team is
              dedicated to providing cutting-edge solutions tailored to 
              your needs. Get in touch below and let's unlock the potential
              of your cannabis products together.
              </p>

            </motion.div>
            {/* FORM AND IMAGE */}
            <div className='mt-10 justify-between gap-8 md:flex'>
              <motion.div
                className='mt-10 basis-3/5 md:mt-0'
                initial='hidden'
                 whileInView='visible'
                 viewport={{once:true, amount: 0.5}}
                 transition={{duration: 1}}
                 variants={{
                   hidden: {opacity: 0, y:50},
                   visible: {opacity: 1, y: 0}
                 }}
              >
                <form
                  target='_blank'
                  onSubmit={onSubmit}
                  action='https://formsubmit.co/your@email.com '
                  method='POST'
                >
                  <input
                    className={inputStyle}
                    type='text'
                    placeholder='NAME'
                    {...register('name', {
                      required:true,
                      maxLength: 100,
                    })}
                  />
                  {errors.name &&(
                    <p className='mt-1 text-red-800'>
                      {errors.name.type === "required" && "This field is required."}
                      {errors.name.type === "maxLength" && "Max length is 100 characters."}
                      
                    </p>
                  )}

                  <input
                    className={inputStyle}
                    type='text'
                    placeholder='EMAIL'
                    {...register('email', {
                      required:true,
                      pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email &&(
                    <p className='mt-1 text-red-800'>
                      {errors.email.type === "required" && "This field is required."}
                      {errors.email.type === "pattern" && "Invalid email address."}
                      
                    </p>
                  )}

                  <textarea
                    className={inputStyle}
                    rows={4}
                    cols={50}
                    placeholder='MESSAGE'
                    {...register('message', {
                      required:true,
                      maxLength: 2000,
                    })}
                  />
                  {errors.message &&(
                    <p className='mt-1 text-red-800'>
                      {errors.message.type === "required" && "This field is required."}
                      {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                      
                    </p>
                  )}

                  <button type='submit' className='mt-5 text-white font-bold rounded-lg bg-amber-400 px-20 py-3 transition duration-500 hover:text-amber-400 hover:bg-zinc-500'>
                    SUBMIT
                  </button>
                

                </form>


              </motion.div>

              <motion.div
                className='relative mt-16 basis-2/5 md:mt-0'
                initial='hidden'
                 whileInView='visible'
                 viewport={{once:true, amount: 0.5}}
                 transition={{delay: 0.2, duration: 1}}
                 variants={{
                   hidden: {opacity: 0, y:50},
                   visible: {opacity: 1, y: 0}
                 }}
              >
                <div >
                  <img 
                    className='w-full h-[400px] rounded-2xl'
                    alt='contact-us-page-graphic'
                    src={contactImg}
                  />
                </div>

              </motion.div>

            </div>

        </motion.div>

    </section>
  )
}

export default ContactUs