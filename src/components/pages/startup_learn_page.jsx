import StartupFundingBar from '../funding/startup-funding-bar'
import '../../stylesheets/learn-page.scss'
import { useHistory } from 'react-router-dom'

const StartupLearnPage = () => {
  let history = useHistory();

  const { logo, description, projectName, funding } = history.location.state
  return <div className='main-content-learn-page'>
    <img src={logo} />
    <h2>{projectName}</h2>
    {description && <p>{description}</p>}
    <StartupFundingBar funding={funding} />
  </div>
}

export default StartupLearnPage;