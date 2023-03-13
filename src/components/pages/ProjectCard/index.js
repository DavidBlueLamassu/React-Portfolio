import React from "react";

const styles = {
  cardPosition: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    background: "rgb(195, 219, 239)",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    height: "325px",
    width: "325px",
    boxShadow: "0 3px 6px #999, 0 3px 6px #999",
    textAlign: "center",
    marginBottom: "40px",
  },
  image: {
    height: "200px"
  },
  links: {
    textDecoration: "none",
    color: "black",
  },
}



//https://getbootstrap.com/docs/4.3/components/card/ Images

function ProjectCard(props) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12" style={styles.cardPosition}>
      <div className="card" style={styles.card}>
        <img src={props.screenshot} className="card-img-top" alt={props.title} style={styles.image}/>
        <div className="card-body">
          <h5 className="card-text">{props.title}</h5>
          <div>
            <a href={props.url} style={styles.links}>URL</a>
          </div>
          <div>
            <a href={props.gitHub} style={styles.links}>GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;



