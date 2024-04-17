import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function DescOne() {
  return (
    <Tabs
      className="tab tab-nav-simple product-tabs"
      selectedTabClassName="show"
      selectedTabPanelClassName="active"
      defaultIndex={0}
    >
      <TabList className="nav nav-tabs justify-content-center" role="tablist">
        <Tab className="nav-item">
          <span className="nav-link">Description</span>
        </Tab>

        <Tab className="nav-item">
          <span className="nav-link">Location</span>
        </Tab>

        <Tab className="nav-item">
          <span className="nav-link">More Offers</span>
        </Tab>

        <Tab className="nav-item">
          <span className="nav-link">Store Policies</span>
        </Tab>

        <Tab className="nav-item">
          <span className="nav-link">Inquiries </span>
        </Tab>

        <Tab className="nav-item">
          <span className="nav-link">Reviews (2)</span>
        </Tab>
      </TabList>

      <div className="tab-content">
        <TabPanel className="tab-pane product-tab-description">
          <div class="row mt-6">
            <div class="col-md-6">
              <h5 class="description-title mb-4 font-weight-semi-bold ls-m">
                Features
              </h5>
              <p class="mb-2">
                Praesent id enim sit amet.Tdio vulputate eleifend in in tortor.
                ellus massa. siti iMassa ristique sit amet condim vel, facilisis
                quimequistiqutiqu amet condim Dilisis Facilisis quis sapien.
                Praesent id enim sit amet.
              </p>
              <ul class="mb-8">
                <li>Praesent id enim sit amet.Tdio vulputate</li>
                <li>Eleifend in in tortor. ellus massa.Dristique sitii</li>
                <li>Massa ristique sit amet condim vel</li>
                <li>
                  Dilisis Facilisis quis sapien. Praesent id enim sit amet
                </li>
              </ul>
              <h5 class="description-title mb-3 font-weight-semi-bold ls-m">
                Specifications
              </h5>
              <table class="table">
                <tbody>
                  <tr>
                    <th class="font-weight-semi-bold text-dark pl-0">
                      Material
                    </th>
                    <td class="pl-4">Praesent id enim sit amet.Tdio</td>
                  </tr>
                  <tr>
                    <th class="font-weight-semi-bold text-dark pl-0">
                      Claimed Size
                    </th>
                    <td class="pl-4">Praesent id enim sit</td>
                  </tr>
                  <tr>
                    <th class="font-weight-semi-bold text-dark pl-0">
                      Recommended Use
                    </th>
                    <td class="pl-4">
                      Praesent id enim sit amet.Tdio vulputate eleifend in in
                      tortor. ellus massa. siti
                    </td>
                  </tr>
                  <tr>
                    <th class="font-weight-semi-bold text-dark border-no pl-0">
                      Manufacturer
                    </th>
                    <td class="border-no pl-4">Praesent id enim</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-6 pl-md-6 pt-4 pt-md-0">
              <h5 class="description-title font-weight-semi-bold ls-m mb-5">
                Video Description
              </h5>
              <figure class="p-relative d-inline-block mb-3">
                <img
                  src="./images/slides/slide-4.jpg"
                  width="559"
                  height="370"
                  alt="Product"
                />
                <a
                  class="btn-play btn-iframe"
                  href="#"
                  data="/uploads/video/video-1.mp4"
                >
                  <i class="d-icon-play-solid"></i>
                </a>
              </figure>
              <div class="icon-box-wrap d-flex flex-wrap">
                <div class="icon-box icon-box-side icon-border pt-2 pb-2 mb-4 mr-10">
                  <div class="icon-box-icon">
                    <i class="d-icon-lock"></i>
                  </div>
                  <div class="icon-box-content">
                    <h4 class="icon-box-title lh-1 pt-1 ls-s text-normal">
                      2 year warranty
                    </h4>
                    <p>Guarantee with no doubt</p>
                  </div>
                </div>
                <div class="divider d-xl-show mr-10"></div>
                <div class="icon-box icon-box-side icon-border pt-2 pb-2 mb-4">
                  <div class="icon-box-icon">
                    <i class="d-icon-truck"></i>
                  </div>
                  <div class="icon-box-content">
                    <h4 class="icon-box-title lh-1 pt-1 ls-s text-normal">
                      Free shipping
                    </h4>
                    <p>On orders over $50.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel className="tab-pane">
          <div style={{ width: "100%", height: "400px" }} id="map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyBgVsModMpsR59_OIK-2sEcmhBBkW4xUuw",
              }}
              defaultCenter={{ lat: 59.95, lng: 30.33 }}
              defaultZoom={11}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </TabPanel>

        <TabPanel className="tab-pane">
          <p>No more offers for this product!</p>
        </TabPanel>

        <TabPanel className="tab-pane">
          <p>No more offers for this product!</p>
        </TabPanel>

        <TabPanel className="tab-pane">
          <p>There are no inquiries yet.!</p>
        </TabPanel>

        <TabPanel className="tab-pane product-tab-reviews">
          <div className="reply">
            <div className="title-wrapper text-left">
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>
            <div className="rating-form">
              <label htmlFor="rating" className="text-dark">
                Your rating *{" "}
              </label>

              <select
                name="rating"
                id="rating"
                required=""
                style={{ display: "none" }}
              >
                <option value="">Rate…</option>
                <option value="5">Perfect</option>
                <option value="4">Good</option>
                <option value="3">Average</option>
                <option value="2">Not that bad</option>
                <option value="1">Very poor</option>
              </select>
            </div>
            <form action="#">
              <textarea
                id="reply-message"
                cols="30"
                rows="6"
                className="form-control mb-4"
                placeholder="Comment *"
                required
              ></textarea>
              <div className="row">
                <div className="col-md-6 mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="reply-name"
                    name="reply-name"
                    placeholder="Name *"
                    required
                  />
                </div>
                <div className="col-md-6 mb-5">
                  <input
                    type="email"
                    className="form-control"
                    id="reply-email"
                    name="reply-email"
                    placeholder="Email *"
                    required
                  />
                </div>
              </div>
              <div className="form-checkbox mb-4">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  id="signin-remember"
                  name="signin-remember"
                />
                <label className="form-control-label" htmlFor="signin-remember">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-rounded">
                Submit<i className="d-icon-arrow-right"></i>
              </button>
            </form>
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
}

export default DescOne;
