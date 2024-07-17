import Logo from "../assets/images/logo.png"
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from "@heroicons/react/24/solid";
import instagramLogo from "../assets/images/instagram.png"
import Linkpage from "../components/Link";
import { SelectedPage } from "../types/types";
import { Link } from "react-router-dom";


type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({selectedPage, setSelectedPage }: Props) => {
  return (
    <footer className="bg-black py-16">
  <div className="mx-auto w-5/6 gap-16 md:flex md:justify-between text-white">

    <div className=" mt-10 md:w-1/3">
      <img className="h-20" alt="logo" src={Logo}/>
      <p className="my-5">
        After years of working in the industry, we have refined
        & perfected our distillation methods. Combining innovative
        custom designed equipment pieces with the highest quality products.
      </p>
      <p>© Next Level Labs All Rights Reserved</p>
    </div>

    <div className="mt-16 md:w-1/4 flex flex-col">
      <h4 className="font-bold mb-5">Links</h4>
      <div className="mb-2">
        <Linkpage
        
        page="Home"
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
        >
        </Linkpage>
      </div>
      <div className="mb-2">
        <Linkpage
        page="About us"
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
        >
        </Linkpage>
      </div>
      <div className="mb-2">
        <Linkpage
        page="Services"
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
        >
        </Linkpage>
      </div>
      <div className="mb-2 hover:text-amber-400">
        <Link
        to="/consulting"
        >
          Consulting
        </Link>
      </div>
      <div>
        <Linkpage
        page="Contact"
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
        >
        </Linkpage>
      </div>

      
      
     
    
      
    </div>

    <div className="mt-16 md:w-1/4">
      <h4 className="font-bold">Contact Details</h4>
      <div className="flex mt-5">
        <MapPinIcon className="h-16 pr-5"></MapPinIcon>
        <p className="">
          NEXT LEVEL LABORATORIES
          123 Building Name, Area Name
          street, city, country-zipcode
          </p>
      </div>
      <div className="flex mt-5">
        <PhoneIcon className="h-8 pr-5"></PhoneIcon>
        <p>000-000-0000</p>
      </div>
      <div className="flex mt-5">
        <EnvelopeIcon className="h-8 pr-5"></EnvelopeIcon>
        <p>info@nextlevellabs.com</p>
      </div>
    </div>

    <div className="mt-16 md:w-1/4">
      <h4 className="font-bold">Follow Us On</h4>
      <div>
        <a href="https://www.instagram.com/nextlevellabs/">
          <img className="h-10 mt-5" src={instagramLogo} alt="" />
        </a>
      </div>
    </div>

  </div>
</footer>
  )
}

export default Footer