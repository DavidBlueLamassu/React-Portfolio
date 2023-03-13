import React from "react";

const styles = {
  page: {
    background: "rgb(195, 219, 239)",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
  },
  header: {
    textAlign: "center",
  },
  subHeader: {
    textAlign: "center",
    marginBottom: "50px"
  },
  imageTextContainer: {
    paddingBottom: "400px"
  },
  imageBox: {
    display: "flex",
    justifyContent: "center"
  },
  image: {
    height: "200px",
    marginBottom: "25px",
    marginTop: "15px"
  },
  text: {
    paddingLeft: "20px",
    textAlign: "justify"
  }
}

function Home() {
  // Fluid Jumbotron https://getbootstrap.com/docs/4.3/components/jumbotron/
  return (
    <div className="jumbotron jumbotron-fluid" style={styles.page}>
      <div className="container">
        <h1 className="display-4" style={styles.header}>Welcome to the Portfolio of David Adams</h1>
        <h2 style={styles.subHeader}>Exploring the Limits of Web Design</h2>
      <div className="row" style={styles.imageTextContainer}>
        <div className="col-lg-2 col-md-2 col-sm-2" style={styles.imageBox} >
        <img alt="David Adams" src="./../assets/images/portrait.jpg" style={styles.image} />
        </div>
        <p className="lead col-lg-10 col-md-12 col-sm-12" style={styles.text}>Nunc pharetra finibus est at efficitur. Praesent sed congue diam. 
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus 
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent 
        euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at. 
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. 
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus 
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent 
        euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.</p>
      </div>
      </div>
    </div>
  );
}

export default Home;
