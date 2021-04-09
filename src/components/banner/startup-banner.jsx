import '../../stylesheets/banner.scss'
import EarthPNG from '../../images/earth.png'
import HandLightBulb from '../../images/handLightBulb.png'
import GroupPNG from '../../images/group.png'

const StartupBanner = () => {
  return (
    <div className='banner'>
      <img className='earth' src={EarthPNG} />
      <img className='hand-lightbulb' src={HandLightBulb} />
      <div className='banner-header'>
        <h1>Invest directly</h1>
        <h1>into minority innovations.</h1>
      </div>
      <img className='group' src={GroupPNG} />
    </div>

  )
}

export default StartupBanner;