import { useState} from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/images/logo.png";
import Linkpage from "./Link";
import { SelectedPage } from "../types/types";
import useMediaQuery from "../hooks/useMediaQuery";
//import ActionButton from "./ActionButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Instagram from "../assets/logo/InstagramLogo";



type Props = {
    isNavbarTransparent: boolean,
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
    variant: "default" | "consulting"
};


const Navbar = ({ variant, isNavbarTransparent, isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "text-white font-bold" : "bg-[#008080] drop-shadow text-white font-bold opacity-85";
  const navbarClasses = `${isNavbarTransparent && !isTopOfPage ? "opacity-0" : navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`;
  

  

  return (
    <nav>
      {variant === "default" ? (
        <div>
          <div className={navbarClasses}>
        <div className={`${flexBetween} mx-auto w-5/6 op`}>

          {/* left side */}
          <motion.div 
            className={`${flexBetween} w-full gap-16`}
            //whileHover={{scale: 1.1}}
            style={{ x: 0 }}
          >
            <img className= "w-50 h-20" alt="logo" src={Logo}/>
          </motion.div>

          {/* right side */}
          {isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-2xl `}>
              <motion.div
                whileHover={{scale:1.1}}
              >
                <Linkpage 
                  page= "Home" 
                  selectedPage={selectedPage} 
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>
              
              <motion.div
                whileHover={{scale:1.1}}
              >
                <Linkpage 
                  page= "About us" 
                  selectedPage={selectedPage} 
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>

              <motion.div
                whileHover={{scale:1.1}}
              >

                <Linkpage 
                  page= "Services" 
                  selectedPage={selectedPage} 
                  setSelectedPage={setSelectedPage}
                />
              </motion.div>

              <motion.div
                whileHover={{scale:1.1}}
              >
                
                <Link
                to="/consulting"
                className="text-white hover:text-[#FF7F50]"
                
                >
                  Consulting
                {/* page= "Consulting"
                 selectedPage={selectedPage} 
                 setSelectedPage={setSelectedPage} */}
                   
                </Link> 
              </motion.div>
            </div>
            <div className={`${flexBetween} gap-8 text-lg`}>
              {/* <ActionButton setSelectedPage={setSelectedPage}>Contact Us</ActionButton> */}
              <motion.button
                className='rounded-md bg-[#FF7F50] px-10 py-2 text-xl text-white hover:bg-white hover:text-[#FF7F50]'
                whileHover={{scale:1.1}}
              >

                <Linkpage
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </motion.button>
            </div>  

          </div> ) : (
            <motion.button 
              className="rounded-full bg-[#FF7F50] p-2"
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
              <Linkpage 
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
              <Linkpage 
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
              <Linkpage 
                page= "Services" 
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
                to="/consulting"
                className="text-white hover:text-amber-400"
                
                >
                  Consulting
                   
                </Link>
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

              <Linkpage 
                page= "Contact" 
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
              <Instagram
              href="https://www.instagram.com/nextlevellabs/"
              />
             </motion.div>
            </div>
        </div>
      )}
        </div>
      ):(
        //Consulting variant/////////
        <div>
          <div className={navbarClasses}>
        <div className={`${flexBetween} mx-auto w-5/6 op`}>

          {/* left side */}
          <motion.div 
            className={`${flexBetween} w-full gap-16`}
            //whileHover={{scale: 1.1}}
            style={{ x: 0 }}
          >
            <img className= "w-50 h-20" alt="logo" src={Logo}/>
          </motion.div>

          {/* right side */}
          {isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-2xl `}>
              <motion.div
                whileHover={{scale:1.1, color: "#FF7F50"}}
              >
                <Link
                  to={"/"}
                >
                  Home
                
                </Link>
              </motion.div>

              <motion.div
                whileHover={{scale:1.1, color: "#FF7F50"}}
              >
                <Link
                  to={"/"}
                >
                  About us
                
                </Link>
              </motion.div>

              <motion.div
                whileHover={{scale:1.1, color: "#FF7F50"}}
              >
                <Link
                  to={"/"}
                >
                  Services
                
                </Link>
              </motion.div>

              
             
            </div>
            <div className={`${flexBetween} gap-8 text-lg`}>
              {/* <ActionButton setSelectedPage={setSelectedPage}>Contact Us</ActionButton> */}
              <motion.button
                className='rounded-md bg-[#FF7F50] px-10 py-2 text-xl text-white hover:bg-white hover:text-[#008080]'
                whileHover={{scale:1.1}}
              >

                <Link
                to={"/"}
                >
                  Contact
                </Link>
              </motion.button>
            </div>  

          </div> ) : (
            <motion.button 
              className="rounded-full bg-[#FF7F50] p-2"
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
              whileHover={{scale:1.2, speed:10, color: "#FF7F50"
                
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
                to={"/"}
              >
                Home
              </Link>
          
                
                
            </motion.div>

            <motion.div
              whileHover={{scale:1.2, speed:10, color: "#FF7F50"}}
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
                to={"/"}
              >
                About us
              </Link>
          
                
                
            </motion.div>

            <motion.div
              whileHover={{scale:1.2, speed:10, color: "#FF7F50"}}
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
                to={"/"}
              >
                Services
              </Link>
          
                
                
            </motion.div>

            <motion.div
              whileHover={{scale:1.2, speed:10, color: "#FF7F50"}}
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
                to={"/"}
              >
               Contact
              </Link>
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
              <Instagram
              href="https://www.instagram.com/nextlevellabs/"
              />
             </motion.div>

         
            </div>
        </div>
      )}

        </div>
      )
      }
    </nav>
  )
}

export default Navbar