import React from "react";

function Home() {
  // Fluid Jumbotron https://getbootstrap.com/docs/4.3/components/jumbotron/
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Welcome to the Portfolio of David Adams</h1>
        <h2>Exploring the Limits of Web Design</h2>
        <img alt="David Adams" src="./../assets/images/portrait.jpg" />
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
  );
}

export default Home;
