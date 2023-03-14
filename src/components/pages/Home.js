import React from "react";

const styles = {
  //Sets font and a pale blue background
  page: {
    background: "rgb(195, 219, 239)",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
  },
  //Main header spacing
  header: {
    paddingTop: "35px",
    textAlign: "center"
  },
  //Subheader spacing
  subHeader: {
    textAlign: "center",
    marginBottom: "50px"
  },
  //Pushes down the bottom of the component to give the page a uniform blue background; flex and justify-content
  //properties center image in smaller media formats
  imageTextContainer: {
    paddingBottom: "400px",
    display: "flex",
    justifyContent: "center"
  },
  //Centers image within its div
  imageBox: {
    display: "flex",
    justifyContent: "center"
  },
  //Sets image size and position; marginBottom places space between image and text below when the former is centered in 
  //smaller media formats
  image: {
    height: "200px",
    marginBottom: "25px",
    marginTop: "15px"
  },
  //Text justified; paddingLeft provides space between text box and image to the left in large media formats
  text: {
    paddingLeft: "20px",
    textAlign: "justify"
  }
}

function Home() {
  // The section below is a Bootstrap component: Fluid Jumbotron from https://getbootstrap.com/docs/4.3/components/jumbotron/
  return (
    <div className="jumbotron jumbotron-fluid" style={styles.page}>
      <div className="container">
        <h1 className="display-4" style={styles.header}>Welcome to the Portfolio of David Adams</h1>
        <h2 style={styles.subHeader}>Exploring the Limits of Web Design</h2>
      <div className="row" style={styles.imageTextContainer}>
        {/* Class name ensures that this div and text box <p> below are responsive. In the largest format the image will
        appear to the left of the textbox. In smaller formats it will be above the textbox and centered */}
        <div className="col-lg-2 col-md-2 col-sm-2" style={styles.imageBox} >
          <img alt="David Adams" src="./../assets/images/portrait.jpg" style={styles.image} />
        </div>
        <p className="lead col-lg-10 col-md-12 col-sm-12" style={styles.text}>Welcome to my webpage. I am 
        currently training as a web developer and am in the final stages of a coding bootcamp in Front End 
        Web Development (week 13 of 16) run by Trilogy Education Services. The skills that I learned over 
        the course of this programme include coding with: React.js/JSX, Node.js, JavaScript/jQuery, CSS, 
        and HTML (including Bootstrap). To date I have deployed eleven webpages on GitHub pages including 
        a group project using Words API and Giphy API. I particularly enjoy the problem-solving aspects of 
        working with JavaScript and its offshoots. Examples of my work may be found in the Portfolio section 
        of this website. Please feel free to contact me. Social media links and my CV may be found in the 
        Contact section.</p>
      </div>
      </div>
    </div>
  );
}

export default Home;
