import StartupCard from '../cards/startup-card'
import CourseCard from '../cards/course-card'
import '../../stylesheets/item-lists.scss'

const ItemList = ({ type, title, items }) => {
  const card = (item) => {
    if (type === 'startup-page') {
      return <StartupCard item={item} />
    } else if (type == 'course-page') {
      return <CourseCard item={item} />
    }

  }

  return <div className='item-list-container'>
    <h2>{title}</h2>
    <ul className='item-list'>
      {Object.values(items).map(item => card(item))}
    </ul>
  </div>
}

export default ItemList;