import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import { timelineText } from '../data/constants'

export default function Timeline() {

  return (
    <VerticalTimeline lineColor='#03a9f4'>
    {
      timelineText.map((text, key) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#03a9f4", color: '#fff' }}
          icon={<text.icon/>}
          date="in progress"
          key={key}
        >
          <h3 className="vertical-timeline-element-title">{text.title}</h3>
          <p className="vertical-timeline-element-subtitle">{text.text}</p>
          <ul className="item">
            {text.tags.map((tag, key) => (
              <li key={key}>{tag}</li>
            ))}
          </ul>
        </VerticalTimelineElement>
      ))
    }
  </VerticalTimeline>
  )
}
