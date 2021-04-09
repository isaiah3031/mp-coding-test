import '../../stylesheets/funding-bar.scss'

const StartupFundingBar = ({ funding }) => {
  const fundingPercentage = (funding) => `${(funding / 100000) * 100}%`


  return <div className='funding-info'>
    <p className='funding-fraction'>{`$${funding} /$100000`}</p >
    <div className='funding-bar-container'>
      <div style={{ width: fundingPercentage(funding) }}
        className='funding-bar-contents'></div>
    </div>
    <p className='funding-percentage'>{fundingPercentage(funding)} Funded</p>
  </div >
}

export default StartupFundingBar;