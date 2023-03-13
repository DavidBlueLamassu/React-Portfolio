import React from "react";
import ProjectCard from "./ProjectCard/";
import projects from "./../../projects.json";

const styles = {
  page: {
    background: "rgb(195, 219, 239)",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
  },
  header: {
    paddingTop: "35px",
    textAlign: "center",
    paddingBottom: "20px",
    fontSize: "50px"
  },
  gallery: {
    display: "flex",
    justifyContent: "center"
  }
}

function Portfolio() {
  return (
    <div style={styles.page}>
      <h1 style={styles.header}>Portfolio</h1>
      <div style={styles.gallery}>
      {ProjectDisplay()}
      </div>
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
