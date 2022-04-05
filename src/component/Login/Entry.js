import React from "react";
import Signup from "./Signup";
import './entry.css'
function Entry({ setLogin }) {
  React.useEffect(() => {
    // Body Class for Page
    const body = document.querySelector("body");
    document.body.classList.add("background-image");
    return () => {
      body.classList.remove("background-image");
    };
  }, []);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default Entry;
