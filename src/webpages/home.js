import React from "react";
import { useNavigate } from "react-router";
import HomePageImage from "../images/homePagePic.jpg";
import "./home.css";

function Service() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/Service");
  }
  return (
    <div className="contact">
      <img src={HomePageImage} alt="No preview" />
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg">
            <h1 class="font-weight-light">Home</h1>
            <p></p>
          </div>
          <div class="col-lg card p-4 request">
            <div class="form-out">
              <h1>Create a Request</h1>
              <p>We Pack, Pick and Deliver back at your door step.</p>
              <br />
              <form
                method="POST"
                action=""
                name="guest_user_frm"
                id="guest_user_frm"
                novalidate="novalidate"
              >
                <div class="form-out-f">
                  <label class="lable-home">Name : </label>
                  <input
                    class="in-home"
                    name="uname"
                    style={{ width: "65%" }}
                    id="uname"
                    type="text"
                    placeholder="Type Name here"
                  />
                </div>
                <div class="form-out-f">
                  <label class="lable-home">Email : </label>
                  <input
                    class="in-home"
                    name="email"
                    style={{ width: "65%" }}
                    id="email"
                    type="email"
                    placeholder="Type Mail id here"
                  />
                </div>
                <div class="form-out-f">
                  <label class="lable-home">Mob No : </label>
                  <input
                    class="in-home"
                    type="text"
                    style={{ width: "65%" }}
                    name="phone"
                    id="phone"
                    placeholder="Type Mobile Number"
                  />
                </div>
                <div class="form-out-f form-group">
                  <label class="lable-home ">Services : </label>
                  <div
                    class="select2-container in-home1 city"
                    id="s2id_service"
                    style={{ width: "65%" }}
                  >
                    <div
                      class="select2-drop select2-with-searchbox"
                      style={{ display: "none" }}
                    >
                      {" "}
                      <div class="select2-search">
                        {" "}
                        <input
                          type="text"
                          autocomplete="off"
                          class="select2-input"
                        />{" "}
                      </div>{" "}
                      <ul class="select2-results"> </ul>
                    </div>
                  </div>
                  <select
                    class="in-home1 city select2-offscreen"
                    name="service"
                    style={{ width: "65%" }}
                    id="service"
                    tabindex="-1"
                  >
                    <option value="">Select Service</option>
                    <option value="Business">Business Storage</option>
                    <option value="Household">Household Storage</option>
                    <option value="Vehicle">Vehicle Storage</option>
                    <option value="Moving">Relocation Service</option>
                    <option value="#boxstorage">Box Storage</option>
                  </select>
                </div>
                <div class="form-out-f">
                  <label class="lable-home">City : </label>
                  <div
                    class="select2-container in-home1 city"
                    id="s2id_city"
                    style={{ width: "65%" }}
                  >
                    <div
                      class="select2-drop select2-with-searchbox"
                      style={{ display: "none" }}
                    >
                      {" "}
                      <div class="select2-search">
                        {" "}
                        <input
                          type="text"
                          autocomplete="off"
                          class="select2-input"
                        />{" "}
                      </div>{" "}
                      <ul class="select2-results"> </ul>
                    </div>
                  </div>
                  <select
                    class="in-home1 city select2-offscreen"
                    name="city"
                    style={{ width: "65%" }}
                    id="city"
                    tabindex="-1"
                  >
                    <option value="">Select City</option>
                    <option value="Agra">Agra</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Ahmednagar">Ahmednagar</option>
                    <option value="Ajmer">Ajmer</option>
                    <option value="Akola">Akola</option>
                    <option value="Aligarh">Aligarh</option>
                    <option value="Allahabad">Allahabad</option>
                    <option value="Almora">Almora</option>
                    <option value="Alwar">Alwar</option>
                    <option value="Ambala">Ambala</option>
                    <option value="Ambattur">Ambattur</option>
                    <option value="Amravati">Amravati</option>
                    <option value="Amritsar">Amritsar</option>
                    <option value="Aurangabad">Aurangabad</option>
                    <option value="Asansol">Asansol</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Bareily">Bareily</option>
                    <option value="Baroda">Baroda</option>
                    <option value="Bastar">Bastar</option>
                    <option value="Bathinda">Bathinda</option>
                    <option value="Belgaum">Belgaum</option>
                    <option value="Bhagalpur">Bhagalpur</option>
                    <option value="Bhavnagar">Bhavnagar</option>
                    <option value="Bhilai">Bhilai</option>
                    <option value="Bhiwandi">Bhiwandi</option>
                    <option value="Bhopal">Bhopal</option>
                    <option value="Bhubaneswar">Bhubaneswar</option>
                    <option value="Bikaner">Bikaner</option>
                    <option value="Bilaspur">Bilaspur</option>
                    <option value="Bokaro">Bokaro</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Cuttack">Cuttack</option>
                    <option value="Chandrapur">Chandrapur</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Dehradun">Dehradun</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Devanagere">Devanagere</option>
                    <option value="Dhanbad">Dhanbad</option>
                    <option value="Durgapur">Durgapur</option>
                    <option value="Faridabad">Faridabad</option>
                    <option value="Firozabad">Firozabad</option>
                    <option value="Gaya">Gaya</option>
                    <option value="Ghaziabad">Ghaziabad</option>
                    <option value="Gurgaon">Gurgaon</option>
                    <option value="Gwalior">Gwalior</option>
                    <option value="Guwahati">Guwahati</option>
                    <option value="Gorakhpur">Gorakhpur</option>
                    <option value="Gulbarga">Gulbarga</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Howrah">Howrah</option>
                    <option value="Indore">Indore</option>
                    <option value="Jabalpur">Jabalpur</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Jalandhar">Jalandhar</option>
                    <option value="Jalgaon">Jalgaon</option>
                    <option value="Jammu">Jammu</option>
                    <option value="Jamnagar">Jamnagar</option>
                    <option value="Jamshedpur">Jamshedpur</option>
                    <option value="Jhansi">Jhansi</option>
                    <option value="Jodhpur">Jodhpur</option>
                    <option value="Kanpur">Kanpur</option>
                    <option value="Kochi">Kochi</option>
                    <option value="Kolhapur">Kolhapur</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Kota">Kota</option>
                    <option value="Kozhikode">Kozhikode</option>
                    <option value="Kurnool">Kurnool</option>
                    <option value="Loni">Loni</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Ludhiana">Ludhiana</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Maheshtala">Maheshtala</option>
                    <option value="Malegaon">Malegaon</option>
                    <option value="Mangalore">Mangalore</option>
                    <option value="Meerut">Meerut</option>
                    <option value="Moradabad">Moradabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Mysore">Mysore</option>
                    <option value="Nagpur">Nagpur</option>
                    <option value="Nanded">Nanded</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Navi Mumbai">Navi Mumbai</option>
                    <option value="Noida">Noida</option>
                    <option value="Patna">Patna</option>
                    <option value="Patiala">Patiala</option>
                    <option value="Pune">Pune</option>
                    <option value="Rajkot">Rajkot</option>
                    <option value="Ranchi">Ranchi</option>
                    <option value="Raipur">Raipur</option>
                    <option value="Rourkela">Rourkela</option>
                    <option value="Saharanpur">Saharanpur</option>
                    <option value="salem">salem</option>
                    <option value="Siliguri">Siliguri</option>
                    <option value="Solapur">Solapur</option>
                    <option value="Srinagar">Srinagar</option>
                    <option value="Surat">Surat</option>
                    <option value="Thane">Thane</option>
                    <option value="Thiruvananthapuram">
                      Thiruvananthapuram
                    </option>
                    <option value="Tirunelveli">Tirunelveli</option>
                    <option value="Tiruppur">Tiruppur</option>
                    <option value="Udaipur">Udaipur</option>
                    <option value="Ulhasnagar">Ulhasnagar</option>
                    <option value="Ujjain">Ujjain</option>
                    <option value="Vadodara">Vadodara</option>
                    <option value="Varanasi">Varanasi</option>
                    <option value="Vishakhapatnam">Vishakhapatnam</option>
                    <option value="Vijayawada">Vijayawada</option>
                    <option value="Warangal">Warangal</option>
                  </select>
                </div>
                <br />
                <div class="form-out-f">
                  <input
                    class="home-butt"
                    name="submit"
                    value="Click to Continue >>"
                    type="submit"
                    onClick={handleClick}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
