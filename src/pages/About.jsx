import { aboutText} from '../data/constants'
import Timeline from "../components/Timeline"

export default function About() {

  return (
    <main className="about">
      <section>
        <header>
          <h2>소개합니다</h2>
          <p>{aboutText}</p>
        </header>

        <article>
          <h2>Experience</h2>
          <Timeline />
        </article>
      </section>
    </main>
  )
}
