import React from "react";
import "./style.css";

function ProjectCard(props) {
  console.log(props.screenshot);
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.screenshot} />
      </div>
      <div className="content">
        <ul>
          <li>
            {props.title}
          </li>
          <li>
          <a href={props.url}>URL</a> 
          </li>
          <li>
          <a href={props.gitHub}>GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
