import React from "react";
import ProjectCard from "./ProjectCard/";
import projects from "./../../projects.json";

const styles = {
  //Sets font and a pale blue background
  page: {
    background: "rgb(195, 219, 239)",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
  },
  //Font size and positioning for main header
  header: {
    paddingTop: "35px",
    textAlign: "center",
    paddingBottom: "20px",
    fontSize: "50px"
  },
}

//Main container for Portfolio page
function Portfolio() {
  return (
    <div style={styles.page}>
      <h1 style={styles.header}>Portfolio</h1>
      <div>
      {ProjectDisplay()}
      </div>
    </div>
  );
}

//Card components diplay: The map() method is used to display all the project data stored in projects.json using the 
//ProjectCard props component held in ProjectCard/index.js as a template.
function ProjectDisplay() {
    return( <div className="row"> {/*Displays card components in rows instead of column default.*/}
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
