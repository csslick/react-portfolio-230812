import React from 'react'

export default function ProjectItem(props) {
  const { title, image } = props;

  return (
    <div className="project-item">
      <a href="#" target="_blank">
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </a>
    </div>
  )
}
