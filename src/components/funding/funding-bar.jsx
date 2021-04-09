import '../../stylesheets/funding-bar.scss'

const FundingBar = ({ funding }) => {
  const fundingPercentage = (funding) => `${(funding / 100000) * 100}%`


  return <div className='funding-info'>
    <p>{`$${funding} /$100000`}</p >
    <div className='funding-bar-container'>
      <div style={{ width: fundingPercentage(funding) }} 
      className='funding-bar-contents'></div>
    </div>
    <p>{fundingPercentage(funding)}</p>
  </div >
}

export default FundingBar;