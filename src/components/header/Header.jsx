import './header.scss';

const Header = () => {

    const logoLetters = '{() => gi}';

    return (
        <div className='header'>
          <div className='wrapper'>
                <a href='#' className='logo-link'>
                    <div className='logo-wrapper'>
                        <div className='logo'>{logoLetters}</div>
                    </div>
                </a>
                <ul className='nav-links'>
                    <li className='nav-link'>About</li>
                    <li className='nav-link'>Projects</li>
                    <li className='nav-link'>Blog</li>
                </ul>
          </div>  
        </div>
    )
}

export default Header;
