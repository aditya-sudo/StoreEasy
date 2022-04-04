import React from "react";

function ItemList() {
  return (
    <div>
      <div id="main-content" class="container">
        <div class="row">
          <h1>Select Your Items You would like to Store</h1>
          <div class="clear"></div>
          <div id="sc-wrap">
            <div id="sc-top">
              {" "}
              <a
                class="sc-living-room active"
                href="#/"
                id="sc-living-room active"
              >
                <h2>Furniture and Electrical Items</h2>
              </a>
              <a class="sc-bedroom" href="#/" id="sc-bedroom">
                <h2>Miscellaneous</h2>
              </a>
              <a class="sc-dining-room " href="#/" id="sc-dining-room">
                <h2>Inventory and Documents</h2>
              </a>
              <a class="sc-misc " href="#/" id="sc-misc">
                <h2>Vehicles</h2>
              </a>
              <div id="sc-slider" class="sc-living-room">
                <div id="sc-up-arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
