import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '../types/types'


type Props = {
    page: string;
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
}

const Linkpage = ({page, selectedPage, setSelectedPage}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  
  

  return (
    <AnchorLink 
      className={`${selectedPage === lowerCasePage ? "text-white": ""} transition duration-500 hover:text-[#FF7F50]`} 
      href={`#${lowerCasePage}`} 
      onClick={() => setSelectedPage(lowerCasePage)}
       >
        {page}
    </AnchorLink>
  )
}

export default Linkpage