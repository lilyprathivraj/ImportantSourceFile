import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {details} = props
  const {courseTitle, duration, description, tagsList} = details
  return (
    <div>
      <div>
        <h1>{courseTitle}</h1>
        <AiFillClockCircle />
        <p>{duration}</p>
      </div>
      <p>{description}</p>
      <ul>
        {tagsList.map(each => (
          <li key={each.name}>
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
