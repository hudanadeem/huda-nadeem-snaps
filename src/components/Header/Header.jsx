import './Header.scss'
import FilterIcon from '../../assets/images/Filter.svg';
import tags from '../../data/tags.json'
import Tag from '../FilterTag/FilterTag';

const Header = ({setDrawerOpen, drawerOpen, selectedTag, setSelectedTag}) =>{
    return(
        <>
        <header className='header'>
          <h1 className='header__title'>Snaps</h1>
          <div 
          onClick={()=> {
          setDrawerOpen(!drawerOpen);
          }}>
            <button className='header__nav'>
              {drawerOpen ? "Close" : "Open"} Filters 
            </button>
          </div>
          <div className={`drawer ${drawerOpen ? "drawer--open" : ""}`}>
            <ul>
              {tags.map((tag) =>{
                return(
                  <li 
                  key={tag}
                  onClick={() => {
                    if (selectedTag === tag) {
                      setSelectedTag(null);
                    } else {
                      setSelectedTag(tag);
                    }
                  }}>
                    <Tag tag={tag} isClickable selectedTag = { selectedTag}/>
                  </li>
                )
              })}
            </ul>
          </div>
        </header>
      </>
    )
}
export default Header;