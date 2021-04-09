import '../../stylesheets/nav-bar.scss'
import facebookIcon from '../../images/facebook-icon.png'
import instaIcon from '../../images/insta-icon.png'
import linkedinIcon from '../../images/linkedin-icon.png'
import twitterIcon from '../../images/twitter-icon.png'

const NavBar = () => {
  return (
    <nav id='nav-bar'>
      <ul className='social-media-links'>
        <img className='social-media-icon' src={twitterIcon} />
        <img className='social-media-icon' src={facebookIcon} />
        <img className='social-media-icon' src={linkedinIcon} />
        <img className='social-media-icon' src={instaIcon} />
      </ul>
      <button className='connect-btn'>Connect Wallet</button>
      <ul className='menu-items'>
        <li>Service</li>
        <li>Events</li>
        <li>Learn</li>
        <li>Join</li>
        <li>Search</li>
      </ul>
    </nav>
  )
}

export default NavBar;