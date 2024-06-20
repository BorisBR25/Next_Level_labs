import Logo from "../assets/images/logo.png"
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from "@heroicons/react/24/solid";
import instagramLogo from "../assets/images/instagram.png"

//type Props = {}

const Footer = () => {
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

    <div className="mt-16 md:w-1/4">
      <h4 className="font-bold">Links</h4>
      <p className="my-5">Home</p>
      <p className="my-5">About Us</p>
      <p className="my-5">Products</p>
      <p className="my-5">Consulting</p>
      <p className="my-5">Contact Us</p>
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
        <img className="h-10 mt-5" src={instagramLogo} alt="" />
      </div>
    </div>

  </div>
</footer>
  )
}

export default Footer