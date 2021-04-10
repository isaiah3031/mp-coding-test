import '../../stylesheets/nav-bar.scss'
import facebookIcon from '../../images/facebook-icon.png'
import instaIcon from '../../images/insta-icon.png'
import linkedinIcon from '../../images/linkedin-icon.png'
import twitterIcon from '../../images/twitter-icon.png'
import SearchIcon from '../../images/search-icon.png'
import SearchVector from '../../images/searchVector.png'
import MPLogo from '../../images/mp-logo.png'

const NavBar = () => {
  return (
    <div id='nav-bar-container'>
      <img className='mp-logo' src={MPLogo} />
      <nav id='nav-bar'>
        <ul className='social-media-links'>
          <img className='social-media-icon' src={twitterIcon} />
          <img className='social-media-icon' src={facebookIcon} />
          <img className='social-media-icon' src={linkedinIcon} />
          <img className='social-media-icon' src={instaIcon} />
        </ul>
        <button className='connect-btn'><p>Connect Wallet</p></button>
        <ul className='menu-items'>
          <li>Service</li>
          <li>Events</li>
          <li>Learn</li>
          <li>Join</li>
          <div className='search-container'>
            <img className='search-icon-bottom-layer' src={SearchIcon} />
            <img className='search-icon-top-layer' src={SearchVector} />
          </div>


        </ul>
      </nav>
    </div>

  )
}

export default NavBar;