import "./TextIcon.css";
import { HouseHoldIcon, VehicleIcon, BoxIcon } from "./TextIcon";
import { Link } from "react-router-dom";
const TextIconItems = () => {
  return (
    <>
      <Link className="text-decoration" to="/household">
        <div tabIndex="0" className="textIconContainer">
          <span>
            <HouseHoldIcon />
            {" "}
          </span>
          <span>Household Storage</span>
        </div>
      </Link>
      <Link className="text-decoration" to="/vehicle">
        <div tabIndex="0" className="textIconContainer">
          <span>
            <VehicleIcon />
            {" "}
          </span>
          <span>Vehicle Storage</span>
        </div>
      </Link>
      <Link className="text-decoration" to="/box">
        <div tabIndex="0" className="textIconContainer">
          <span>
            <BoxIcon />
            {" "}
          </span>
          <span>Box Storage</span>
        </div>
      </Link>
    </>
  );
};
export default TextIconItems;
