import React from "react";
import About from "../images/aboutus.jpg";
function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="u-clearfix u-expanded-width u-gutter-52 u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-col">
              <div class="u-size-30">
                <div class="u-layout-col">
                  <div class="u-align-left u-container-style u-layout-cell u-size-60 u-layout-cell-1">
                    <div class="u-container-layout u-container-layout-1">
                      <img
                        class="u-absolute-hcenter u-expanded-height u-image u-image-1 contactimg"
                        src={About}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="u-size-30">
                <div class="u-layout-row">
                  <div class="u-container-style u-layout-cell u-size-21 u-layout-cell-2">
                    <div class="u-container-layout u-container-layout-2">
                      <h5 class="u-text u-text-1">contact me</h5>
                      <p class="u-custom-font u-heading-font u-text u-text-2">
                        &nbsp;202, Tanay Complex,AttaBhai Chowk,
                        Bhavnagar.364002
                      </p>
                      <p class="u-custom-font u-heading-font u-text u-text-3">
                        6353848344
                        <br />
                        9539756412
                      </p>
                    </div>
                  </div>
                  <div class="u-container-style u-grey-15 u-layout-cell u-size-39 u-layout-cell-3">
                    <div class="u-container-layout u-container-layout-3">
                      <h5 class="u-text u-text-4">about</h5>
                      <p class="u-custom-font u-heading-font u-text u-text-5">
                        {" "}
                        We are a one stop destination for all your storage
                        needs. If you are traveling, renovating your house,
                        running out of space or looking for storage units or
                        storage spaces for rent for your households and
                        automobiles, self storage near me.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
