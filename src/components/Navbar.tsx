import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/images/logo.png";
import Link from "./Link";
import { SelectedPage } from "../types/types";
import useMediaQuery from "../hooks/useMediaQuery";
//import ActionButton from "./ActionButton";
import { motion } from "framer-motion";


type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
};


const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground =isTopOfPage ? "text-white font-bold": "bg-black drop-shadow text-white";


  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>

          {/* left side */}
          <motion.div 
            className={`${flexBetween} w-full gap-16`}
            whileHover={{scale: 1.1}}
            style={{ x: 0 }}
          >
            <img className= "w-50 h-20" alt="logo" src={Logo}/>
          </motion.div>

          {/* right side */}
          {isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <motion.div
                whileHover={{scale:1.1}}
              >
                <Link 
                  page= "Home" 
                  selectedPage={selectedPage} 
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>
              
              <motion.div
                whileHover={{scale:1.1}}
              >
                <Link 
                  page= "About us" 
                  selectedPage={selectedPage} 
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>

              <motion.div
                whileHover={{scale:1.1}}
              >

                <Link 
                  page= "Products" 
                  selectedPage={selectedPage} 
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>

              <motion.div
                whileHover={{scale:1.1}}
              >
                <Link 
                  page= "Consulting"
                  selectedPage={selectedPage} 
                  setSelectedPage={setSelectedPage}
                  />
              </motion.div>
            </div>
            <div className={`${flexBetween} gap-8 text-sm`}>
              {/* <ActionButton setSelectedPage={setSelectedPage}>Contact Us</ActionButton> */}
              <motion.button
                className='rounded-md bg-secondary-500 px-10 py-2 text-white hover:bg-zinc-500 hover:text-white'
                whileHover={{scale:1.1}}
              >

                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </motion.button>
            </div>  

          </div> ) : (
            <motion.button 
              className="rounded-full bg-secondary-500 p-2"
              whileHover={{scale: 1.1}}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white"/>

            </motion.button>
          )}
        </div>
      </div>
      {/* MOBILE MENU MODAL*/}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-neutral-800 opacity-90 drop-shadow-xl text-white">
          {/* CLOSE ICON*/}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400"/>
            </button>
          </div>
          <div className={"ml-[33%] flex flex-col gap-10 text-2xl"}>
            <motion.div
              whileHover={{scale:1.2, speed:10
                
              }}
              initial='hidden'
              whileInView='visible'
              viewport={{once:true, amount: 0.5}}
              transition={{delay:0.1,duration: 1}}
              variants={{
                hidden: {opacity: 0, x:50},
                visible: {opacity: 1, x: 0}
              }}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Link 
                  page= "Home" 
                  selectedPage={selectedPage} 
                  setSelectedPage={setSelectedPage}
          
                />
                
            </motion.div>

            <motion.div
              whileHover={{scale:1.1}}
              initial='hidden'
              whileInView='visible'
              viewport={{once:true, amount: 0.5}}
              transition={{delay:0.4,duration: 1}}
              variants={{
                hidden: {opacity: 0, x:50},
                visible: {opacity: 1, x: 0}
              }}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Link 
                page= "About us" 
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage}
              />
            </motion.div> 
              
            <motion.div
              whileHover={{scale:1.1}}
              initial='hidden'
              whileInView='visible'
              viewport={{once:true, amount: 0.5}}
              transition={{delay:0.3,duration: 1}}
              variants={{
                hidden: {opacity: 0, x:50},
                visible: {opacity: 1, x: 0}
              }}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Link 
                page= "Products" 
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage}
              />
            </motion.div>  
             
           


            <motion.div
              whileHover={{scale:1.1}}
              initial='hidden'
              whileInView='visible'
              viewport={{once:true, amount: 0.5}}
              transition={{delay:0.2,duration: 1}}
              variants={{
                hidden: {opacity: 0, x:50},
                visible: {opacity: 1, x: 0}
              }}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Link 
                page= "Consulting"
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage}
              />
            </motion.div>

             <motion.div
              whileHover={{scale:1.1}}
              initial='hidden'
              whileInView='visible'
              viewport={{once:true, amount: 0.5}}
              transition={{delay:0.5,duration: 1}}
              variants={{
                hidden: {opacity: 0, x:50},
                visible: {opacity: 1, x: 0}
              }}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
             >

              <Link 
                page= "Contact" 
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage}
              />
             </motion.div>
            </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar