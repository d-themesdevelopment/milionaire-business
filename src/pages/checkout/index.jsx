import ALink from "@/components/features/CustomLink";
import { useEffect, useState } from "react";
// import addCurrentLocation from "google-maps-current-location";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const CheckoutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const asyncFn = async () => {
      const mapEl = document.getElementById("map");
      const { Map } = await window.google.maps.importLibrary("maps");

      if (!mapEl) {
        throw new Error("Cannot get map element");
      }

      const map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });

      // addCurrentLocation(map);
    };

    asyncFn();
  }, []);

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <main className="main checkout">
      <h1 className="d-none">React eCommerce Template - Checkout</h1>
      <div className="page-content pt-7 pb-10 mb-10">
        <div className="step-by pr-4 pl-4">
          <h3 className="title title-simple title-step">
            <ALink href="/cart">1. Shopping Cart</ALink>
          </h3>
          <h3 className="title title-simple title-step active">
            <ALink href="/checkout">2. Checkout</ALink>
          </h3>
          <h3 className="title title-simple title-step">
            <a href="#">3. Order Complete</a>
          </h3>
        </div>
        <div className="container mt-7">
          <form action="#" className="form">
            <div className="row">
              <div className="col-lg-7 mb-6 mb-lg-0 pr-lg-4">
                <h3 className="title title-simple text-left text-uppercase">
                  Billing Details
                </h3>
                <div className="row">
                  <div className="col-xs-6">
                    <label>First Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="first-name"
                      required=""
                      fdprocessedid="1yj12b"
                    />
                  </div>
                  <div className="col-xs-6">
                    <label>Last Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="last-name"
                      required=""
                      fdprocessedid="6i7izo"
                    />
                  </div>
                </div>

                <label>Company Name (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  name="company-name"
                  required
                />
                <label>Country / Region *</label>
                <div className="select-box">
                  <select
                    name="country"
                    className="form-control"
                    defaultValue="us"
                  >
                    <option value="us">United States (US)</option>
                    <option value="uk"> United Kingdom</option>
                    <option value="fr">France</option>
                    <option value="aus">Austria</option>
                  </select>
                </div>

                <label>Street Address *</label>
                <input
                  type="text"
                  className="form-control"
                  name="address1"
                  required
                  placeholder="House number and street name"
                />
                <input
                  type="text"
                  className="form-control"
                  name="address2"
                  required
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />

                <div className="row">
                  <div className="col-xs-6">
                    <label>Town / City *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      required
                    />
                  </div>
                  <div className="col-xs-6">
                    <label>State *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="state"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-6">
                    <label>ZIP *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="zip"
                      required
                    />
                  </div>
                  <div className="col-xs-6">
                    <label>Phone *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12">
                    <label>Email Address *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email-address"
                      required=""
                      fdprocessedid="f8e4km"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12">
                    <label>Delivery Location *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email-address"
                      required=""
                      fdprocessedid="f8e4km"
                    />
                  </div>
                </div>

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

                {/* <div className="form-checkbox mb-6 mt-5">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="different-address"
                    name="different-address"
                    onChange={() => setIsOpen(!isOpen)}
                  />
                  <label
                    className="form-control-label ls-s"
                    htmlFor="different-address"
                  >
                    Ship to a different address?
                  </label>

                  {isOpen && (
                    <div style={{ overflow: "hidden" }}>
                      <div className="row pt-4">
                        <div className="col-xs-6">
                          <label>First Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="first-name"
                            required
                          />
                        </div>
                        <div className="col-xs-6">
                          <label>Last Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="last-name"
                            required
                          />
                        </div>
                      </div>
                      <label>Company Name (Optional)</label>
                      <input
                        type="text"
                        className="form-control"
                        name="company-name"
                        required
                      />
                      <label>Country / Region *</label>
                      <div className="select-box">
                        <select
                          name="country"
                          className="form-control"
                          defaultValue="us"
                        >
                          <option value="us">United States (US)</option>
                          <option value="uk"> United Kingdom</option>
                          <option value="fr">France</option>
                          <option value="aus">Austria</option>
                        </select>
                      </div>
                      <label>Street Address *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address1"
                        required
                        placeholder="House number and street name"
                      />
                      <input
                        type="text"
                        className="form-control"
                        name="address2"
                        required
                        placeholder="Apartment, suite, unit, etc. (optional)"
                      />
                      <div className="row">
                        <div className="col-xs-6">
                          <label>Town / City *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            required
                          />
                        </div>
                        <div className="col-xs-6">
                          <label>State *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="state"
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-6">
                          <label>ZIP *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="zip"
                            required
                          />
                        </div>
                        <div className="col-xs-6">
                          <label>Phone *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div> */}

                <h2 className="title title-simple text-uppercase text-left mt-6">
                  Additional Information
                </h2>
                <label>Order Notes (Optional)</label>
                <textarea
                  className="form-control pb-2 pt-2 mb-0"
                  cols="30"
                  rows="5"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                ></textarea>
              </div>
              <aside className="col-lg-5 sticky-sidebar-wrapper">
                <div
                  className="sticky-sidebar mt-1"
                  data-sticky-options="{'bottom': 50}"
                >
                  <div className="summary pt-5">
                    <h3 className="title title-simple text-left text-uppercase">
                      Your Order
                    </h3>
                    <table className="order-table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product-name">
                            Group trip on Shaqran Yacht in Jeddah sea
                            <span className="product-quantity">×&nbsp;2</span>
                          </td>
                          <td className="product-total text-body">$198.00</td>
                        </tr>
                        <tr>
                          <td className="product-name">
                            Group trip on Shaqran Yacht in Jeddah sea
                            <span className="product-quantity">×&nbsp;17</span>
                          </td>
                          <td className="product-total text-body">$935.00</td>
                        </tr>
                        <tr className="summary-subtotal">
                          <td>
                            <h4 className="summary-subtitle">Subtotal</h4>
                          </td>
                          <td className="summary-subtotal-price pb-0 pt-0">
                            $1,133.00
                          </td>
                        </tr>

                        <tr className="summary-total">
                          <td className="pb-0">
                            <h4 className="summary-subtitle">Total</h4>
                          </td>
                          <td className=" pt-0 pb-0">
                            <p className="summary-total-price ls-s text-primary">
                              $1,133.00
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="payment accordion radio-type">
                      <h4 className="summary-subtitle ls-m pb-3">
                        Payment Methods
                      </h4>
                      <div className="checkbox-group">
                        <div className="card-header">
                          <a className="text-body text-normal ls-m " href="#">
                            Check payments
                          </a>
                        </div>
                        <div className="card-wrapper collapse">
                          <div className="card-body ls-m overflow-hidden">
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </div>
                        </div>
                        <div className="card-header">
                          <a
                            className="text-body text-normal ls-m collapse"
                            href="#"
                          >
                            Cash on delivery
                          </a>
                        </div>
                        <div className="card-wrapper collapse show">
                          <div className="card-body ls-m overflow-hidden">
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-checkbox mt-4 mb-5">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        id="terms-condition"
                        name="terms-condition"
                      />
                      <label
                        className="form-control-label"
                        for="terms-condition"
                      >
                        I have read and agree to the website{" "}
                        <a href="#">terms and conditions </a>*
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-dark btn-rounded btn-order"
                      fdprocessedid="fw531f"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
