import ItemList from '../lists/item-list'
import * as data from '../../data'
import '../../stylesheets/startup-page.scss'
import StartupBanner from '../banner/startup-banner'

const StartupPage = () => {
  return <>
    <div className='rounded-top'></div>
    <StartupBanner page='startup' />
    <section className='main-content'>
      <ItemList type='startup-page' title='Featured Startups' items={data.featuredStartups} />
      <ItemList type='startup-page' title='Upcoming Startups' items={data.upcomingStartups} />
      <ul className='bottom-nav'>
        <button>Advise A Startup</button>
        <button>Join Minority Ventures Cohort</button>
        <button>{`Help <Code/>`}</button>
      </ul>

    </section>
  </>
}

export default StartupPage;