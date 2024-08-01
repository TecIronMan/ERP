import React from "react";
import homeicon from "../../icons/homeicon.svg";
import "../../CSS/home.css";


function Home() {
  return (
    <div className="d-flex">
        
   <div className="container">
        <div className="animated-text">
          <p className="line" style={{ animationDelay: "0s" }}>
           Everything
          </p>
          <p className="line" style={{ animationDelay: "0.5s" }}>
           At
          </p>
          <p className="line" style={{ animationDelay: "1s" }}>
            Your
          </p>
          <p className="line" style={{ animationDelay: "1.5s" }}>
            Finger Tip
          </p>
        </div>
     
      </div>

        
        <img src={homeicon} className="rounded float-end" alt="..."></img>
      
    </div>
  );
}

export default Home;
