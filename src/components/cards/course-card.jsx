import CourseCompletionBar from '../funding/course-completion-bar'
import EarningPotential from '../funding/earning-potential'
import '../../stylesheets/earning-potential-tag.scss'
import '../../stylesheets/cards.scss'
import { Link } from 'react-router-dom'

const CourseCard = ({ item }) => {
  const { title, description, amountComplete } = item

  // For some reason the learn link wont pass the item as props unless its broken
  // down like this
  const learnLink = (item) =>
    <Link to={{
      pathname: '/#/courses/learn',
      state: {
        title: title,
        description: description,
        amountComplete: amountComplete
      }

    }}>LEARN</Link>

  return <li className='card rounded-gradient-border'>
    <EarningPotential potentialValue={30} />
    <div className='text-container'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>


    <div className='card-btns'>
      <button className='btn learn-btn'>
        {learnLink()}
      </button>
    </div>
    <CourseCompletionBar amountComplete={amountComplete} />
  </li >

}

export default CourseCard;