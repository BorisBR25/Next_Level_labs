import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '../types/types'


type Props = {
    page: string;
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
  const lowerCasePage = page.toLocaleUpperCase().replace(/ /g, "") as SelectedPage;
  
  

  return (
    <AnchorLink 
      className={`${selectedPage === lowerCasePage ? "text-black": ""} transition duration-500 hover:text-amber-400`} 
      href={`#${lowerCasePage}`} 
      onClick={() => setSelectedPage(lowerCasePage)}
       >
        {page}
    </AnchorLink>
  )
}

export default Link