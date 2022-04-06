import './header.scss';
// import { Link } from 'react-router-dom';

const Header = () => {

    // const logoLetters = 'gi';

    return (
        <div className='header'>
          <div className='wrapper'>
                <a href='/' className='logo-link'>
                    <p className='logo-letters firstname'>GODSON</p>
                    <p className='logo-letters surname'>IMIEBO</p>
                </a>
          </div>  
        </div>
    )
}

export default Header;
