import StartupFundingBar from '../funding/startup-funding-bar'
import '../../stylesheets/cards.scss'
import { Link } from 'react-router-dom'

const StartupCard = ({ item }) => {
  const { logo, description, funding } = item


  return <li className='card rounded-gradient-border'>
    <div className='logo-container'>
      <img src={logo} />
      {description && <p>{description}</p>}
    </div>


    <div className='card-btns'>
      <button className='btn give-btn'>GIVE</button>
      <button className='btn learn-btn'><Link to={{
        pathname: '/learn',
        state: {
          item: { item }
        }
      }}>LEARN</Link></button>
    </div>
    <StartupFundingBar funding={funding} />
  </li>

}

export default StartupCard;