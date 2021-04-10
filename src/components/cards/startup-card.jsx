import StartupFundingBar from '../funding/startup-funding-bar'
import '../../stylesheets/cards.scss'
import { Link } from 'react-router-dom'

const StartupCard = ({ item }) => {
  const { logo, projectName, description, funding } = item

  // For some reason the learn link wont pass the item as props unless its broken
  // down like this
  const learnLink = () =>
    <Link to={{
      pathname: '/startups/learn',
      state: {
        logo: logo,
        projectName: projectName,
        description: description,
        funding: funding
      }

    }}>LEARN</Link>

  return <li className='card rounded-gradient-border'>
    <div className='logo-container'>
      <img src={logo} />
      {description && <p>{description}</p>}
    </div>

    <div className='card-btns'>
      <button className='btn give-btn'>GIVE</button>
      <button className='btn learn-btn'>
        {learnLink()}
      </button>
    </div>
    <StartupFundingBar funding={funding} />
  </li>

}

export default StartupCard;