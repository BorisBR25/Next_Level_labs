import React from 'react';
import { motion } from 'framer-motion';
import Htext from '../components/Htext'; // Asumiendo que tienes un componente Htext creado
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Iconos para control del carousel
//import useMediaQuery from '../hooks/useMediaQuery'; // Asumiendo que tienes un hook personalizado para manejar media queries
import aboutUsImg1 from '../assets/images/aboutusImg1.png'
import aboutUsImg2 from '../assets/images/aboutusImg1.png';
import aboutUsImg3 from '../assets/images/aboutusImg.jpg';
import aboutUsImg4 from '../assets/images/productImg4.jpg';
import aboutUsImg5 from '../assets/images/labImg.jpg';
import { SelectedPage } from '../types/types';


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const AboutUs = ({setSelectedPage}: Props) => {
  //const isAboveMediumScreens = useMediaQuery('(min-width: 768px)'); // Ajusta el tamaño de la pantalla según sea necesario

  // const aboutUsData = [
  //   { image: aboutUsImg1 },
  //   { image: aboutUsImg2 },
  //   { image: aboutUsImg3 },
  //   { image: aboutUsImg4 },
  //   { image: aboutUsImg5 },
  // ];
  const aboutUsData = [aboutUsImg1, aboutUsImg2, aboutUsImg3, aboutUsImg4, aboutUsImg5];


  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === aboutUsData.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? aboutUsData.length - 1 : prevIndex - 1));
  };

  return (
    <section id='aboutus' className='mx-auto min-h-full bg-green-950 w-full pt-28 pb-0'>
      <motion.div 
      className='mx-auto w-full max-w-6xl px-4'
      onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
      >
        <div className='text-center mb-14'>
          <Htext>ABOUT <span className='text-amber-400 font-extrabold'>US</span></Htext>
        </div>
        


      
          <div className='mb-8 text-center'>
            <h2 className='text-3xl text-amber-400 font-semibold mb-2'>Next Level Labs: Pioneers in Cannabis Extraction and Consulting</h2>
            <p className='text-white text-xl'>
              With over 14 years of dedicated service in the cannabis industry, Next Level Labs stands at the forefront
              of cannabis extraction and consulting. Based in California, our company has built a legacy of excellence,
              innovation, and unwavering commitment to quality.
            </p>
          </div>

        {/* Carousel de imágenes */}
        <div className='relative mx-auto w-full max-w-6xl px-4'>
            <div className='relative w-full overflow-hidden rounded-lg'>
              <ul className='relative flex transition-transform duration-300 ease-in-out transform -translate-x-full'>
                {aboutUsData.map((item, index) => (
                  <li
                    key={index}
                    className={`w-full h-96 md:h-[600px] flex-shrink-0`}
                    style={{ 
                      transform: `translateX(${currentIndex * -100}%)`,
                    }}
                  >
                    <img src={item} alt={`About Us ${index}`} className='object-cover w-full h-full rounded-lg' />
                  </li>
                ))}
              </ul>

              <button
                className='absolute top-1/2 left-4 -translate-y-1/2 z-10 p-3 bg-white bg-opacity-50 rounded-full shadow-md transition-transform duration-300 ease-in-out transform -translate-x-2 hover:translate-x-0'
                onClick={prevSlide}
              >
                <FiChevronLeft className='text-3xl text-gray-700' />
              </button>

              <button
                className='absolute top-1/2 right-4 -translate-y-1/2 z-10 p-3 bg-white bg-opacity-50 rounded-full shadow-md transition-transform duration-300 ease-in-out transform translate-x-2 hover:translate-x-0'
                onClick={nextSlide}
              >
                <FiChevronRight className='text-3xl text-gray-700' />
              </button>
            </div>
        </div>

      {/* Contenido de la sección */}
        <div className='py-10 text-black text-lg leading-relaxed'>

          <div className='mb-8'>
            <h3 className='text-2xl text-amber-400 font-semibold mb-2'>Our Story</h3>
            <p className='text-white text-xl'>
              Founded over a decade ago, Next Level Labs emerged from a passion for cannabis and a vision to
              revolutionize the industry. From humble beginnings, we have grown into a leading name in cannabis
              extraction, known for our cutting-edge techniques and superior product quality. Our journey has been
              fueled by a relentless pursuit of innovation and a deep understanding of the plant's potential.
            </p>
          </div>

          <div className='mb-8'>
            <h3 className='text-2xl text-amber-400 font-semibold mb-2'>Our Expertise</h3>
            <p className='text-white text-xl'>
              Our team is the backbone of Next Level Labs, bringing together a wealth of knowledge and experience.
              With a combined 38 years of expertise in cannabis extraction, growing, manufacturing, fulfillment,
              design, and innovation, our professionals are among the best in the field. Each team member is dedicated
              to pushing the boundaries of what’s possible, ensuring that our clients receive the best products and
              services in the industry.
            </p>
          </div>

          <div className='mb-8'>
            <h3 className='text-2xl text-amber-400 font-semibold mb-2'>Our Mission</h3>
            <p className='text-white text-xl'>
              At Next Level Labs, our mission is clear: to elevate the standards of cannabis extraction and
              consulting. We are committed to providing our clients with top-tier products and unparalleled consulting
              services that drive success and innovation. Our approach is holistic, focusing not only on the end product
              but also on sustainable and efficient practices that benefit both our clients and the environment.
            </p>
          </div>

          <div className='mb-8'>
            <h3 className='text-2xl text-amber-400 font-semibold mb-2'>Values and Principles</h3>
            <ul className='list-disc pl-5 text-white text-xl'>
              <li>
                <strong>Innovation:</strong> We continually invest in research and development to stay ahead of
                industry trends and technology.
              </li>
              <li>
                <strong>Quality:</strong> Every product and service we offer is held to the highest standards of
                quality and safety.
              </li>
              <li>
                <strong>Integrity:</strong> We operate with transparency and honesty, building lasting relationships
                with our clients and partners.
              </li>
              <li>
                <strong>Sustainability:</strong> We are committed to sustainable practices that protect our planet and
                ensure the long-term viability of the cannabis industry.
              </li>
            </ul>
          </div>

          <div className='mb-8'>
            <h3 className='text-2xl text-amber-400 font-semibold mb-2'>Our Team</h3>
            <p className='text-white text-xl'>
              Our team is composed of passionate experts who live and breathe cannabis. From our master growers to our
              extraction technicians and innovative designers, each member brings unique skills and insights to the
              table. This collective expertise allows us to offer comprehensive solutions that meet the diverse needs
              of our clients.
            </p>
          </div>

          <div>
            <h3 className='text-2xl text-amber-400 font-semibold mb-2'>Why Choose Next Level Labs?</h3>
            <p className='text-white text-xl'>
              Choosing Next Level Labs means partnering with a team that is dedicated to your success. We understand
              the complexities of the cannabis industry and are here to guide you through every step of the process.
              Whether you need expert consulting, high-quality extraction services, or innovative product designs, we
              have the knowledge and experience to help you achieve your goals.
            </p>
          </div>
        </div>
      </motion.div>

      
    </section>
  );
};

export default AboutUs;
