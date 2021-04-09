import ItemList from '../lists/item-list'
import * as data from '../../data'
import '../../stylesheets/startup-page.scss'

const StartupPage = () => {
  return (
    <section className='main-content'>
      <ItemList title='Featured Startups' items={data.featuredStartups} />
      <ItemList title='Upcoming Startups' items={data.featuredStartups} />
      <ul className='bottom-nav'>
        <button>Advise A Startup</button>
        <button>Join Minority Ventures Cohort</button>
        <button>{`Help <Code/>`}</button>
      </ul>
    </section>
  )
}

export default StartupPage;