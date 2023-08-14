import { useParams, Link } from 'react-router-dom'
import { projectList } from '../data/constants';

export default function Detail() {
  const params = useParams();
  const { title, image, skills, url, text } = projectList[params.id];
  console.log(params)

  return (
    <main className="detail">
      <section>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <ul className='skills'>
          {skills.map((skill, key) => (
            <li key={key}>{skill}</li>
          ))}
        </ul>
        <Link to={url}>{url}</Link>
        <p>{text}</p>
      </section>
    </main>
  )
}
