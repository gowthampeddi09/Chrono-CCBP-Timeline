// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div className="course-timeline-card">
      <div className="heading-container">
        <h1 className="course-name">{courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="course-tag-list">
        {tagsList.map(eachTag => (
          <li className="course-tag-item" key={eachTag.id}>
            <p className="course-tag">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
