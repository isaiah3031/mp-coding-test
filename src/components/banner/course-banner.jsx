import '../../stylesheets/banner.scss'
import EarthPNG from '../../images/earth.png'
import ButterFly from '../../images/butterfly.png'
import GroupPNG from '../../images/group.png'

const StartupBanner = () => {
  return (
    <div className='banner'>
      <img className='earth' src={EarthPNG} />
      <img className='butterfly' src={ButterFly} />
      <div className='banner-header course-banner-header'>
        <h1>Learn high in</h1>
        <h1>Demand IT Skills & get crypto.</h1>
        <h2>powered by KoinStreet</h2>
      </div>
      <img className='group' src={GroupPNG} />
    </div>

  )
}

export default StartupBanner;