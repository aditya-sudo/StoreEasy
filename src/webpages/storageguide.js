import React from "react";
import storageguide from "../images/storageguide.jpg";
import "./storageguide.css";
function Guide() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <img
            src={storageguide}
            alt="storage guide"
            className="storageguide"
          />
        </div>
      </div>
      <div id="main-content" class="container min-600">
        <div class="row">
          <h1>Size Guide</h1>
          <br />
          <br />
          {/* <strong>This size guide helps you visualize what space size will suit your requirement.</strong> <br/> */}
          {/* <div class="clear"></div><br/><br/> */}
          <table width="100%" class="table-1">
            <tbody>
              <tr>
                <th width="10%"> Category </th>
                <th width="10%"> Unit Size </th>
                <th width="10%"> Area </th>
                <th width="10%"> What the Unit can hold </th>
              </tr>
              <tr>
                <td> Tiny </td>
                <td> 2’ x 2’ </td>
                <td> 4 sq.ft&nbsp; </td>
                <td>
                  Very small space good to stack 1 or 2 &nbsp;boxes or small
                  item
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td> Box </td>
                <td> 24" x 24" x 24" </td>
                <td> 4 sq.ft &nbsp; </td>
                <td>
                  A good size to store seasonal items, gym equipments, Clothes,
                  books, camera, utensils, frames, kid’s toys, office
                  stationeries, files etc. You can store as much item as it can
                  fit in the box.
                </td>
              </tr>
              <tr>
                <td> Small </td>
                <td> 5’ x 5’ </td>
                <td> 25 sq.ft&nbsp; </td>
                <td>
                  Chairs, Small bookshelf, suitcases, small items, few boxes
                </td>
              </tr>
              <tr>
                <td> Small </td>
                <td> 5’ x 10’ </td>
                <td> 50 sq.ft&nbsp; </td>
                <td>
                  Chairs, Sofa, Chest of drawers, few boxes OR Household items
                  from 1 small room
                </td>
              </tr>
              <tr>
                <td> Medium </td>
                <td> 5’ x 15’ </td>
                <td> 75 sq.ft&nbsp; </td>
                <td>
                  Sofa, Chairs, chest of drawers, mattress, desks, book shelf,
                  multiple boxes OR Household items from 2 rooms
                </td>
              </tr>
              <tr>
                <td> Medium </td>
                <td> 10’ x 10’ </td>
                <td> 100 sq.ft&nbsp; </td>
                <td>Furnishings of one bedroom apartment</td>
              </tr>
              <tr>
                <td> Medium </td>
                <td> 10’ x 15’ </td>
                <td> 150 sq.ft&nbsp; </td>
                <td>
                  Furnishings of two bedroom apartment or a small house with
                  appliances, furniture and multiple boxes
                </td>
              </tr>
              <tr>
                <td> Large </td>
                <td> 10’ x 20’ </td>
                <td> 200 sq.ft&nbsp; </td>
                <td>
                  Furnishings of two bedroom house with appliances and
                  furniture, multiple boxes
                </td>
              </tr>
              <tr>
                <td> Large </td>
                <td> 10’ x 25’ </td>
                <td> 250 sq.ft&nbsp; </td>
                <td>Furnishings of 3 bedroom house</td>
              </tr>
              <tr>
                <td> Huge </td>
                <td> 10’ x 30’ </td>
                <td> 300 sq.ft&nbsp; </td>
                <td>
                  Furnishings of 4 or 5 bedroom house with appliances and
                  furniture, many boxes and miscellaneous
                </td>
              </tr>
            </tbody>
          </table>
          <div class="clear"></div>
          <br />
          <span class="red">
            º And many more sizes available as per your requirement
          </span>
          <br />
          <br />
          <strong>
            This is a standard visualisation of items that can come under the
            specified area. Actual can differ on the basis of size, quantity of
            your items.
          </strong>
          <br />
          <br />
          We don't want to be tied down, and we expect you don't either. That's
          why we rent storage rooms of varying sizes, and for the duration that
          best suits you.
          <br />
          You only pay for the space you need, that's why our customer services
          staff are trained to match your requirements to the best storage size
          offering.
          <hr />
          <br />
        </div>
      </div>
      <br />
    </div>
  );
}

export default Guide;
