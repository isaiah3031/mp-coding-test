import StartupCard from '../cards/startup-card'
import '../../stylesheets/item-lists.scss'

const ItemList = ({ title, items }) => {
  return <>
    <h2>{title}</h2>
    <ul className='item-list'>
      {Object.values(items).map(item => <StartupCard item={item} />)}
    </ul>
  </>
}

export default ItemList;