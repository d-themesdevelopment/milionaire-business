import ALink from "@/components/features/CustomLink";

const CartPage = () => {
  return (
    <div className="main cart">
      <div className="page-content pt-7 pb-10">
        <div className="step-by pr-4 pl-4">
          <h3 className="title title-simple title-step active">
            <ALink href="/cart">1. Shopping Cart</ALink>
          </h3>
          <h3 className="title title-simple title-step">
            <ALink href="/checkout/">2. Checkout</ALink>
          </h3>
          <h3 className="title title-simple title-step">
            <a href="#">3. Order Complete</a>
          </h3>
        </div>

        <div className="container mt-7 mb-2">
          <div className="row">
            <div className="col-lg-8 col-md-12 pr-lg-4">
              <table className="shop-table cart-table">
                <thead>
                  <tr>
                    <th>
                      <span>Product</span>
                    </th>
                    <th></th>
                    <th>
                      <span>Price</span>
                    </th>
                    <th>
                      <span>quantity</span>
                    </th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="product-thumbnail">
                      <figure>
                        <a href="/product/default/best-dark-blue-pedestrian-bag/">
                          <img
                            src="./images/home/products/product1.jpg"
                            width="100"
                            height="100"
                            alt="product"
                          />
                        </a>
                      </figure>
                    </td>
                    <td className="product-name">
                      <div className="product-name-section">
                        <a href="#">Moka Star</a>
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span className="amount">$99.00</span>
                    </td>
                    <td className="product-quantity">
                      <div className="mr-2 input-group">
                        <button
                          className="quantity-minus d-icon-minus"
                          fdprocessedid="na3uw"
                        ></button>
                        <input
                          className="quantity form-control"
                          type="number"
                          min="1"
                          max="98"
                          value="2"
                          fdprocessedid="ng1wg"
                        />
                        <button
                          className="quantity-plus d-icon-plus"
                          fdprocessedid="hej2j9"
                        ></button>
                      </div>
                    </td>
                    <td className="product-price">
                      <span className="amount">$198.00</span>
                    </td>
                    <td className="product-close">
                      <a className="product-remove" href="/cart/#">
                        <i className="fas fa-times"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="cart-actions mb-6 pt-4">
                <a
                  className="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4"
                  href="/shop/"
                >
                  <i className="d-icon-arrow-left"></i>Continue Shopping
                </a>
                <button
                  type="submit"
                  className="btn btn-outline btn-dark btn-md btn-rounded  btn-disabled"
                  fdprocessedid="cxujrm"
                >
                  Update Cart
                </button>
              </div>
              <div className="cart-coupon-box mb-8">
                <h4 className="title coupon-title text-uppercase ls-m">
                  Coupon Discount
                </h4>
                <input
                  type="text"
                  name="coupon_code"
                  className="input-text form-control text-grey ls-m mb-4"
                  id="coupon_code"
                  placeholder="Enter coupon code here..."
                  fdprocessedid="wwv8qq"
                />
                <button
                  type="submit"
                  className="btn btn-md btn-dark btn-rounded btn-outline"
                  fdprocessedid="ex175"
                >
                  Apply Coupon
                </button>
              </div>
            </div>
            <aside className="col-lg-4 sticky-sidebar-wrapper">
              <div
                className="sticky-sidebar"
                data-sticky-options="{'bottom': 20}"
              >
                <div className="summary mb-4">
                  <h3 className="summary-title text-left">Cart Totals</h3>
                  <table className="shipping">
                    <tbody>
                      <tr className="product-wrap">
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
                        <td>
                          <p className="summary-subtotal-price">$1,133.00</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="total">
                    <tbody>
                      <tr className="summary-subtotal">
                        <td>
                          <h4 className="summary-subtitle">Total</h4>
                        </td>
                        <td>
                          <p className="summary-total-price ls-s">$1,133.00</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <ALink
                    className="btn btn-dark btn-rounded btn-checkout"
                    href="/checkout/"
                  >
                    Proceed to checkout
                  </ALink>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
