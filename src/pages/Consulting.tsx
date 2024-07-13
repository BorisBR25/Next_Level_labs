//import { motion } from "framer-motion"
//import useMediaQuery from "../hooks/useMediaQuery"

import VideoPlayer from "../components/VideoPlayer"
import video from '../assets/images/videoHoney.mp4'
import cultivationImg from '../assets/images/cultivationImg.png'
import operationalImg from '../assets/images/operationalImg.jpg'
import retailImg from '../assets/images/retailImg.jpg'
import { useState, useEffect } from "react"
import Footer from "./Footer"


const Consulting = () => {

  
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [isNavbarTransparent, setIsNavbarTransparent] = useState<boolean>(false);
  //const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  useEffect(() => {

    let scrollTimeout:any;

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)

      setIsNavbarTransparent(false); 

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsNavbarTransparent(true); // Navbar se vuelve transparente después de 2 segundos de inactividad
      }, 2000);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  console.log(isTopOfPage, isNavbarTransparent)

  return (

    <>
    
   
  
    <section 
    id='consulting'
    className='gap-16 bg-cover bg-green-950 md:h-full pt-16 pb-16'
    style={{
      //backgroundImage:`url(${backImg})`,
      backgroundPosition:'center',
      backgroundSize:'cover',
    }}
    >
      <div className="bg-green-950 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-400 mb-6">
            Elevate Your Cannabis Operations with Next Level Labs
          </h2>
          <p className="text-xl text-white mb-12">
            At Next Level Labs, we offer expert consultation services designed to take your cannabis operations to the next level. With over 14 years of industry experience and a team of seasoned professionals, we provide comprehensive solutions tailored to your unique needs. Our expertise spans all forms of extraction, cultivation, operational optimization, retail operations, and distribution services, ensuring that you achieve the highest quality products while maximizing efficiency and reducing costs.
          </p>
        </div>

        {/* Extraction Techniques Section */}
        <div className="flex flex-col md:flex-row items-center md:justify-between bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:w-1/2 p-4">
            <VideoPlayer
              videoUrl={video}
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Extraction Techniques</h3>
            <p className="text-gray-600 text-xl mb-4">
              We specialize in a wide range of extraction methods, each carefully optimized to produce superior results.
            </p>
            <ul className="list-disc list-inside text-xl text-gray-600">
              <li>Bubble Hash</li>
              <li>Ethanol Extraction</li>
              <li>Distillation</li>
              <li>Hydrocarbon Extraction</li>
              <li>Rosin</li>
              <li>THCA Extracts</li>
              <li>High Terpene Extracts</li>
            </ul>
          </div>
        </div>

        {/* Cultivation Expertise Section */}
        <div className="flex flex-col md:flex-row-reverse items-center md:justify-between bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:w-1/2 p-4">
            <img src={cultivationImg} alt="Cultivation Expertise" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="md:w-1/2 p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Cultivation Expertise</h3>
            <p className="text-gray-600 text-xl mb-4">
              Our consultation services extend beyond extraction. With master growers experienced in large-scale farming, greenhouse management, and indoor operations, we offer unparalleled expertise in cannabis cultivation.
            </p>
            <ul className="list-disc list-inside text-xl text-gray-600">
              <li>Large Scale Farming</li>
              <li>Greenhouse Operations</li>
              <li>Indoor Growing</li>
            </ul>
          </div>
        </div>

        {/* Retail Operations and Distribution Services Section */}
        <div className="flex flex-col md:flex-row items-center md:justify-between bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:w-1/2 p-4">
            <img src={retailImg} alt="Retail Operations and Distribution Services" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="md:w-1/2 p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Retail Operations and Distribution Services</h3>
            <p className="text-gray-600 text-xl mb-4">
              In addition to cultivation and extraction, Next Level Labs brings extensive experience in cannabis retail operations and distribution services.
            </p>
            <p className="text-gray-600 text-xl mb-4">
              Our team can guide you through the complexities of setting up and managing retail outlets, ensuring compliance with all regulations and optimizing your customer experience. We also provide comprehensive distribution services, ensuring your products reach their destinations efficiently and securely.
            </p>
          </div>
        </div>

        {/* Licensing and Operational Support Section */}
        <div className="flex flex-col md:flex-row-reverse items-center md:justify-between bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:w-1/2 p-4 ">
            <img src={operationalImg} alt="Licensing and Operational Support" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="md:w-1/2 p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Licensing and Operational Support</h3>
            <p className="text-gray-600 text-xl mb-4">
              Navigating the complexities of licensing and getting your operation up and running can be challenging. Our in-house architects and engineers streamline the entire process, making it faster and easier than any other company on the market.
            </p>
            <p className="text-gray-600 text-xl mb-4">
              From initial design to final approvals, our team ensures that you meet all regulatory requirements and achieve operational excellence swiftly and efficiently.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-16">
          <h3 className="text-3xl font-bold text-amber-400 mb-2">Why Choose Next Level Labs?</h3>
          <p className="text-xl text-white mb-8">
            <span className="font-extrabold text-2xl">Industry Expertise: </span>
             Benefit from our extensive experience and deep understanding of the cannabis industry.
          </p>
          <p className="text-xl text-white mb-8">
          <span className="font-extrabold text-2xl">Innovative Techniques: </span>
             Stay ahead of the curve with the latest advancements in extraction and cultivation.
          </p>
          <p className="text-xl text-white mb-8">
          <span className="font-extrabold text-2xl">Holistic Support: </span>
             Receive comprehensive support covering all aspects of your cannabis operations.
          </p>
          <p className="text-xl text-white mb-8">
          <span className="font-extrabold text-2xl">Proven Results: </span>
             Achieve higher yields, better quality, and greater efficiency with our expert guidance.
          </p>
          <p className="text-xl text-white mb-8">
          <span className="font-extrabold text-2xl">Streamlined Licensing: </span>
             Our in-house architects and engineers make getting licensed and operational faster and easier than any other company on the market.
          </p>
          <p className="text-xl text-white mb-8">
          <span className="font-extrabold text-2xl">Vertical Integration: </span>
             We offer the expertise needed to make any company fully vertically integrated, from cultivation and extraction to retail and distribution.
          </p>
          <p className="text-xl text-white mb-8">
            Feel free to reach out to us for a consultation and discover how Next Level Labs can transform your cannabis business.
          </p>
        </div>
      </div>
    </div>
      <Footer/>
    </section>
    </>
  )
}

export default Consulting