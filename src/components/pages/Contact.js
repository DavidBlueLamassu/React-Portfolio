import React from 'react';

const styles = {
  page: {
    background: "rgb(195, 219, 239)",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
  },
  header: {
    fontSize: "50px",
    textAlign: "center",
    marginBottom: "50px",
    paddingTop: "35px"
  },
  linkSpacing: {
    marginBottom: "50px",
  },
  links: {
    textDecoration: "none",
    color: "black",
    display: "flex",
    justifyContent: "center"
  },
  textMe: {
    fontSize: "30px",
    marginBottom: "10px"
  },
  input: {
    paddingBottom: "150px",
    width: "300px",
    display: "flex",
    justifyContent: "center" 
  },
  inputSpacing: {
    display: "flex",
    justifyContent: "center"
  },
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
          <a href="https://github.com/DavidBlueLamassu" style={styles.links}>CV</a>
        </div>
      </div>
      {/* Overview https://getbootstrap.com/docs/4.0/components/forms/ */}
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
