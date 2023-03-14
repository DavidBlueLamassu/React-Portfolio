import React from 'react';

const styles = {
  //Sets a pale blue background and font
  page: {
    background: "rgb(195, 219, 239)",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
  },
  //Size and spacing for header text
  header: {
    fontSize: "50px",
    textAlign: "center",
    marginBottom: "50px",
    paddingTop: "35px"
  },
  //Spacing below links
  linkSpacing: {
    marginBottom: "50px",
  },
  //Removes text decoration for links and centers each link using flex and justify-content properties
  links: {
    textDecoration: "none",
    color: "black",
    display: "flex",
    justifyContent: "center",
    fontSize: "20px"
  },
  //Size and spacing for text box header
  textMe: {
    fontSize: "30px",
    marginBottom: "10px"
  },
  //Size and spacing for text box
  input: {
    paddingBottom: "150px",
    width: "300px"
  },
  //Text box, header and button centered using flex and justify-content properties
  inputSpacing: {
    display: "flex",
    justifyContent: "center"
  },
  //Submit button color and spacing
  button: {
    marginBottom: "500px",
    marginTop: "20px",
    background: "rgb(63, 5, 139)",
    border: "rgb(63, 5, 139)"
  }
};

function Contact(props) {
  return (
    <div style={styles.page}>
      <h1 style={styles.header}>Contact Me</h1>
      <div className="row" style={styles.linkSpacing}>
        {/* Class name ensures that divs are responsive */}
        <div className="col-lg-3 col-md-6 col-sm-12">
          <a href="https://github.com/DavidBlueLamassu" style={styles.links}>GitHub Profile</a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <a href="https://www.linkedin.com/in/david-adams-922022a1/" style={styles.links}>LinkedIn Page</a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <a href="mailto:dra21@cam.ac.uk" style={styles.links}>E-mail</a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <a href="https://drive.google.com/file/d/1bzNSK8dZJcKRyuq8AdRfgVmCGf3MVq90/view" style={styles.links}>CV</a>
        </div>
      </div>
      {/* This textbox section below is a Bootstrap form component: Overview from https://getbootstrap.com/docs/4.0/components/forms/ */}
      <form>
        <div className="form-group" style={styles.inputSpacing}>
          <label style={styles.textMe}>Send me a text</label>
        </div>
        <div style={styles.inputSpacing}>
          <input className="form-control"  placeholder="Message" style={styles.input}/>
        </div>
        <div style={styles.inputSpacing}>
          <button type="submit" className="btn btn-primary" style={styles.button}>Submit</button>
        </div>
      </form>
  </div>
  );
}

export default Contact;
