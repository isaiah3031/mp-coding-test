import ItemList from '../lists/item-list'
import * as data from '../../data'
import '../../stylesheets/startup-page.scss'
import CourseBanner from '../banner/course-banner'

const CoursesPage = () => {
  return <>
    <div className='rounded-top'></div>
    <CourseBanner />
    <section className='main-content'>
      <ItemList title='My Courses' type='course-page' items={data.courses} />
      <ItemList title='Featured Courses' type='course-page' items={data.courses} />
      <ul className='bottom-nav'>
        <button>Advise A Startup</button>
        <button>Join Minority Ventures Cohort</button>
        <button>{`Help <Code/>`}</button>
      </ul>

    </section>
    <div className='rounded-bottom'></div>
  </>
}

export default CoursesPage;