import CourseCompletionBar from '../funding/course-completion-bar'
import '../../stylesheets/learn-page.scss'
import { useHistory } from 'react-router-dom'

const CourseLearnPage = () => {
  let history = useHistory();

  const { title, description, amountComplete } = history.location.state
  return <div className='main-content-learn-page'>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
    <CourseCompletionBar amountComplete={amountComplete} />
  </div>
}

export default CourseLearnPage;