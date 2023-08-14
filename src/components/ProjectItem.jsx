import { Link } from 'react-router-dom';

export default function ProjectItem(props) {
  const { title, image, id } = props;

  return (
    <div className="project-item">
      <Link to={`/detail/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  )
}
