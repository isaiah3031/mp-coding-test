import CourseCompletionBar from '../funding/course-completion-bar'
import '../../stylesheets/cards.scss'

const CourseCard = ({ item }) => {
  const { title, description, amountComplete } = item
  return <li className='card rounded-gradient-border'>
    <div className='text-container'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>


    <div className='card-btns'>
      <button className='learn-btn'>LEARN</button>
    </div>
    <CourseCompletionBar amountComplete={amountComplete} />
  </li>

}

export default CourseCard;