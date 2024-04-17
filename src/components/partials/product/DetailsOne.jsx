const DetailsOne = () => {
  return (
    <>
      <div className="product-details ">
        <h2 className="product-name">ANMAR Trips</h2>

        <div className="product-meta __web-inspector-hide-shortcut__">
          SKU: <span className="product-sku">9871236</span>CATEGORIES:{" "}
          <span className="product-brand">
            <a href="/react/riode/demo-1/shop/?category=cosmetic">Cosmetic</a>
          </span>
        </div>

        <div className="product-price mb-2">
          <del className="new-price">$130.00 / week</del>
        </div>

        <p className="product-short-desc">
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus
          adipiscing. Sed egestas, ante et vulputate volutpat, eros pede semper
          est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol
          faucibus adipiscing.
        </p>

        <hr className="product-divider"></hr>

        <div className="product-form product-qty pb-0">
          <label className="d-none">QTY:</label>
          <div className="product-form-group">
            <div className="mr-2 input-group">
              <button
                className="quantity-minus d-icon-minus"
                fdprocessedid="4xc2b"
              ></button>
              <input
                className="quantity form-control"
                type="number"
                min="1"
                max="82"
                value="1"
                fdprocessedid="5or067"
                data-listener-added_d2366792="true"
              />
              <button
                className="quantity-plus d-icon-plus"
                fdprocessedid="aipad"
              ></button>
            </div>
            <button
              className="btn-product btn-cart text-normal ls-normal font-weight-semi-bold disabled"
              fdprocessedid="w5uu8h"
            >
              <i className="d-icon-bag"></i>Add to Cart
            </button>
          </div>
        </div>

        <hr className="product-divider mb-3 mt-4"></hr>

        <div className="product-footer">
          <div className="social-links mr-4">
            <a
              className="social-link social-facebook fab fa-facebook-f"
              href="/react/riode/demo-1/product/default/fashionable-leather-satchel/#"
            ></a>
            <a
              className="social-link social-twitter fab fa-twitter"
              href="/react/riode/demo-1/product/default/fashionable-leather-satchel/#"
            ></a>
            <a
              className="social-link social-pinterest fab fa-pinterest-p"
              href="/react/riode/demo-1/product/default/fashionable-leather-satchel/#"
            ></a>
          </div>{" "}
          <span className="divider d-lg-show"></span>{" "}
          <a
            href="#"
            className="btn-product btn-wishlist"
            title="Add to wishlist"
          >
            <i className="d-icon-heart"></i> Add to Wishlist
          </a>
        </div>
      </div>
    </>
  );
};

export default DetailsOne;
