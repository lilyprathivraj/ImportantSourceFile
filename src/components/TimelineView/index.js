import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div>
        <h1>MY JOURNEY OF CCBP 4.0</h1>
        <div>
          <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
            {timelineItemsList.map(each =>
              each.categoryId === 'COURSE' ? (
                <CourseTimelineCard key={each.id} details={each} />
              ) : (
                <ProjectTimelineCard key={each.id} details={each} />
              ),
            )}
          </Chrono>
        </div>
      </div>
    )
  }
}
export default TimelineView
