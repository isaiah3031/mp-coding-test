import '../../stylesheets/funding-bar.scss'

const CourseCompletionBar = ({ amountComplete }) => {
  const completionPercentage = () => `${(amountComplete / 10) * 100}%`


  return <div className='funding-info'>
    <p className='funding-fraction'>{`${amountComplete} /10`}</p >
    <div className='funding-bar-container'>
      <div style={{ width: completionPercentage(amountComplete) }}
        className='funding-bar-contents'></div>
    </div>
    <p className='funding-percentage'>{completionPercentage(amountComplete)} Completed</p>
  </div >
}

export default CourseCompletionBar;