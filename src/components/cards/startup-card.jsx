import FundingBar from '../funding/funding-bar'
import '../../stylesheets/cards.scss'

const StartupCard = ({ item }) => {
  const { logo, description, funding } = item
  return <li className='card rounded-gradient-border'>
    <div className='logo-container'>
      <img src={logo} />
      {description && <p>{description}</p>}
    </div>


    <div className='card-btns'>
      <button className='give-btn'>GIVE</button>
      <button className='learn-btn'>LEARN</button>
    </div>
    <FundingBar funding={funding} />
  </li>

}

export default StartupCard;