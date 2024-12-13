import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  const {projectTitle, projectUrl, imageUrl, duration, description} = details
  console.log(details)
  return (
    <div>
      <img className="image" alt="project" src={imageUrl} />
      <div>
        <h1>{projectTitle}</h1>
        <AiFillCalendar />
        <p>{duration}</p>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimelineCard
