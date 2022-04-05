import React from "react";
import storeRoom from "../../../images/storeroom.jpg";
import demotext from "../../../images/demo-text.png";
import "./Household.css";
import TextIconItems from "./TextIconItems";
function StoreRoom() {
  return (
    <div className="main-container">
      <div>
        <img
          className="image-container-storeRoom"
          src={storeRoom}
          alt="No Preview available"
        />
      </div>
      <div className="content-container">
        <div className="side-bar">
          <TextIconItems />
        </div>
        <div className="main-content">
          <h2 className="main-content-title">Store Rooms</h2>

          <img
            className="demo-text"
            src={demotext}
            alt="No preview available"
          />
          <br />

          <div>
            Often we find ourselves lacking adequate room in our homes. No
            matter if you live in a large home or a small house, an apartment or
            a condo, sometimes we just need more furniture to seasonal clothing
            to wine and holiday décor. StorEasy.com can keep your things safe
            and secure until you need them again. We have created a{" "}
            <span className="text-blue"> wide variety </span>
            of rental options for personal and household storage use. Rent a
            mini storage space for a few boxes, or lease a larger, garage-sized
            space for a few rooms worth of items.
          </div>
          <br />
          <div className="text-red">
            For any queries, feel free to contact us. No matter what your needs
            may be, our storage experts will gladly assist you.
          </div>
          <br />
          <button className="create-req">Create Request</button>
        </div>
      </div>
    </div>
  );
}

export default StoreRoom;
