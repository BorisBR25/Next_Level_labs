import { useEffect, useState } from "react"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import { SelectedPage } from "./types/types";
import Consulting from "./pages/Consulting";
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
  const [selectedPage, setSelectedPage]= useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [isNavbarTransparent, setIsNavbarTransparent] = useState<boolean>(false);

  useEffect(() => {

    let scrollTimeout:any;

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false) 

      setIsNavbarTransparent(false); 

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsNavbarTransparent(true); // Navbar se vuelve transparente después de 2 segundos de inactividad
      }, 2000);

    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    }
  }, [])

  return (
    <>
      
      <div className='app bg-white'>
      
          <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <>
              <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage}
                isNavbarTransparent={isNavbarTransparent}
                variant="default"
                />
              
              <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <AboutUs setSelectedPage={setSelectedPage}/>
              <Products setSelectedPage={setSelectedPage}/>
              <ContactUs setSelectedPage={setSelectedPage}/>
              <Footer
              selectedPage={selectedPage} 
              setSelectedPage={setSelectedPage}
              />
              </>
            }/>
          
          
          
          {/*<Consulting selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>*/}
          
            <Route path="/consulting" element={
              <>
               <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage}
                isNavbarTransparent={isNavbarTransparent}
                variant="consulting"
                />
                <Consulting/>
              </>
                }/>
          </Routes>
       
          </BrowserRouter>
      </div>
    </>
  )
}

export default App
