import React from "react";
import ProjectCard from "./ProjectCard/";
import projects from "./../../projects.json";

function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
            mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
            porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
            semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
            rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      {ProjectDisplay()}
    </div>
  );
}

function ProjectDisplay() {
    return( <div className="row">
      {
        projects.map(function(currentObject) {
          return <ProjectCard 
          key={currentObject.id}
          title={currentObject.title} 
          screenshot={currentObject.screenshot} 
          url={currentObject.url}
          gitHub={currentObject.gitHub}/>
        })
      }
    </div>
    )
  }

export default Portfolio;
