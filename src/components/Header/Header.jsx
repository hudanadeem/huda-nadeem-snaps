import './Header.scss'
import FilterIcon from '../../assets/images/Filter.svg';

const Header = () =>{
    return(
        <>
        <header className='header'>
            <h1 className='header__title'>Snaps</h1>
            <button className='header__nav'>
                Filters <img src={FilterIcon} alt="Filter Icon" className="header__icon" />
            </button>
        </header>
        </>
    )
}

export default Header;