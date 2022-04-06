import React from "react";
import "./about.css";
import aboutUsImage1 from "../images/about.jpg"
import aboutUsImage2 from "../images/about1.jpg"
import aboutUsImage3 from "../images/about2.jpg"
import aboutUsImage4 from "../images/about3.png"
import aboutUsImage5 from "../images/about4.jpg"
function About() {
  return (
    <div className="mainAboutContainer">
      <div className="first-row-images">
   <img src={aboutUsImage1} alt="No Preview Available" width={200} />
   <img className="image-spacing" src={aboutUsImage2} alt="No Preview Available" width={200} />
   <img className="image-spacing" src={aboutUsImage3} alt="No Preview Available" width={200} />

      </div>
      <div className="content-image-flex">
        <div className="aboutUs-content">
          <p>
            Many a times we find people going on-site or moving to some other
            city for a certain period and they don’t get a safe and secure place
            to keep their belongings that they can’t carry along. They end up
            either selling their belongings at a lower price or just give it to
            someone free of cost. When they return, resettlement requires high
            investment in terms of time, money and effort.
          </p>
          <p>
            We understand your belongings also carry a very high emotional value
            which is really painful to part with. It might just be a broken
            piece of toy of your child for others, but it might be something
            which you would want to preserve forever. Storekaro.com brings
            solution to all these problems. No matter where life takes you,
            we’re here to look after your belongings when you need us.
          </p>
          <p>
            Our main aim is to provide safe, secured and insured storage space
            and to make the storage experience as easy as possible by offering
            you a range of sizes and prices with payment options. Nevertheless
            our warehouse is well equipped with 24 hours security, fire alarm
            systems, smoke detectors, CCTV surveillance cameras, fire
            extinguisher systems and a whole lot more, so you can feel at ease
            when you leave your stuff with us. �Whether you are moving out of
            town, downsizing, making room at home, or even storing inventories –
            storekaro.com has a storage space to suit your needs.
          </p>
        </div>
        <div className="right-sidebar-images">
   <img className="image-spacing" src={aboutUsImage4} alt="No Preview Available" width={200} />
   <img className="image-spacing" src={aboutUsImage5} alt="No Preview Available" width={200} />

        </div>
      </div>
    </div>
  );
}

export default About;
