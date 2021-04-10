
import * as data from '../../data'
import '../../stylesheets/startup-page.scss'
import '../../stylesheets/category-cards.scss'
import CourseBanner from '../banner/course-banner'
import innovationCategoryImageTop from '../../images/hand-color.png'
import innovationCategoryImageBottom from '../../images/lightBulb-color.png'
import scienceCategoryImage from '../../images/earth-color.png'
import programmingCategoryImage from '../../images/programming.png'
import engineeringCategoryImage from '../../images/engineering.png'
import ItemList from '../lists/item-list'

const CoursesPage = () => {
  return <>
    <div className='rounded-top'></div>
    <CourseBanner />
    <section className='main-content'>
      <ItemList title='My Courses' type='course-page' items={data.courses} />
      <ItemList title='Featured Courses' type='course-page' items={data.courses} />
      <div className='category-list'>
        <h2 className='category-header'>By Category</h2>
        <ul className='item-list'>
          <div className='category-card rounded-gradient-border'>
            <h2 className='category-header'>Engineering</h2>
            <img className='category-image' src={engineeringCategoryImage} />
          </div>
          <div className='category-card rounded-gradient-border'>
            <h2 className='category-header'>Science</h2>
            <img className='category-image' src={scienceCategoryImage} />
          </div>
          <div className='category-card rounded-gradient-border'>
            <h2 className='category-header'>Innovation</h2>
            <div className='category-card'>
              <img className='innovation-top' src={innovationCategoryImageTop} />
              <img className='innovation-bottom' src={innovationCategoryImageBottom} />
            </div>
          </div>
          <div className='category-card rounded-gradient-border'>
            <h2 className='category-header'>Programming</h2>
            <img className='category-image' src={programmingCategoryImage} />
          </div>
        </ul>
      </div>
    </section>

  </>
}

export default CoursesPage;