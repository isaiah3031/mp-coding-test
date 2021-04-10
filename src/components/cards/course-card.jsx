import CourseCompletionBar from '../funding/course-completion-bar'
import EarningPotential from '../funding/earning-potential'
import '../../stylesheets/earning-potential-tag.scss'
import '../../stylesheets/cards.scss'

const CourseCard = ({ item }) => {
  const { title, description, amountComplete } = item
  return <li className='card rounded-gradient-border'>
    <EarningPotential potentialValue={30} />
    <div className='text-container'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>


    <div className='card-btns'>
      <button className='btn learn-btn'>LEARN</button>
    </div>
    <CourseCompletionBar amountComplete={amountComplete} />
  </li>

}

export default CourseCard;