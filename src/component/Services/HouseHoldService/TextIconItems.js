import "./TextIcon.css";
import { HouseHoldIcon, VehicleIcon, BoxIcon } from "./TextIcon";
const TextIconItems = () => {
  
  return (
    <>
      <div  tabIndex="0" className="textIconContainer" >
        <span><HouseHoldIcon />{" "}</span>
        <span>Household Storage</span>
      </div>
      <div tabIndex="0" className="textIconContainer" >
      <span><VehicleIcon />{" "}</span>
        <span>Vehicle Storage</span>
      </div>
      <div tabIndex="0" className="textIconContainer" >
      <span><BoxIcon />{" "}</span>
        <span>Box Storage</span>
      </div>

    </>
  );
};
export default TextIconItems;
