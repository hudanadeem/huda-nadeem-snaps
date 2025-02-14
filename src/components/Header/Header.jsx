import './Header.scss'
import FilterIcon from '../../assets/images/Filter.svg';
import tags from '../../data/tags.json'
import Tag from '../FilterTag/FilterTag';

const Header = ({setDrawerOpen, drawerOpen, selectedTag, setSelectedTag}) =>{
    return(
        <>
        <header className='header'>
          <div className='header__container'>
            <h1 className='header__title'>Snaps</h1>
            <div 
            onClick={()=> {
            setDrawerOpen(!drawerOpen);
            }}>
              <button className='header__nav'>
                Filters 
                <img className="header__icon" src={FilterIcon} alt="Filter Icon"/>
              </button>
            </div>
          </div>
          <div className={`header__drawer ${drawerOpen ? "header__drawer--open" : ""}`}>
            <h2 className='header__drawer--title'>Filters</h2>
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