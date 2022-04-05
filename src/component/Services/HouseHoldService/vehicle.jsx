import React from "react";
import vehicleStorage from "../../../images/vehicle-Storage.jpeg";
import demotext from "../../../images/demo-text.png";
import "./Household.css";
import TextIconItems from "./TextIconItems";
function Vehicle() {
  return (
    <div className="main-container">
      <div className="image-container">
        <img src={vehicleStorage} alt="No Preview available" />
      </div>
      <div className="content-container">
        <div className="side-bar">
          <TextIconItems />
        </div>
        <div className="main-content">
          <h2 className="main-content-title">Vehicle Storage</h2>

          <img
            className="demo-text"
            src={demotext}
            alt="No preview available"
          />
          <br />

          <div>
            If you are looking for an extra garage, you can avail our vehicle
            storage solution to fulfill your requirement.{" "}
            <span className="text-blue">
              We provide safe and secure vehicle storage space on rent, for all
              types of vehicles.
            </span>
            Once you decide to store your car or motor bike, at our facility,
            please place a space reservation request online or call us -there’s
            no obligation. Whether you are looking for{" "}
            <span className="text-blue">long term</span> vehicle storage or for
            a <span className="text-blue">short term</span> (as short as a
            week), we have the right storage rental for you. Please feel free to
            inspect the storage space and meet the property manager before
            renting.
          </div>
          <br />
          <div className="text-red">
            When you're ready to pack, we've got everything you need including
            logistics to move your belongings from your end to our warehouse.
          </div>
          <br />
          <div>
            Or
            <br />
            <b>Call us at 9548761324</b>
            <br /><br />
          </div>
          <button className="create-req">Create Request</button>
        </div>
      </div>
    </div>
  );
}

export default Vehicle;
