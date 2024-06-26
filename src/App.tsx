import { useEffect, useState } from "react"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import { SelectedPage } from "./types/types";
import Consulting from "./pages/Consulting";




function App() {
  const [selectedPage, setSelectedPage]= useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
      
      <div className='app bg-white'>
      
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage} 
          setSelectedPage={setSelectedPage}
        />
        
          <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          
          <AboutUs setSelectedPage={setSelectedPage}/>
          <Products setSelectedPage={setSelectedPage}/>
          <Consulting selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <ContactUs setSelectedPage={setSelectedPage}/>
          <Footer/>
       
      </div>
    </>
  )
}

export default App
