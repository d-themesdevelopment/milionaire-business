import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ALink from "@/components/features/CustomLink";

import { toDecimal } from "@/utils";

function ProductTwo(props) {
  const { product, adClass = "text-center", isCategory = true } = props;

  return (
    <div className={`product text-left ${adClass}`}>
      <figure className="product-media">
        <ALink href={`/`}>
          <LazyLoadImage
            alt="product"
            src={`./images/home/products/${product.imgUrl}`}
            threshold={500}
            effect="opacity"
            width="300"
            height="182"
          />
        </ALink>

        <div className="product-label-group">
          {product.is_new ? (
            <label className="product-label label-new">New</label>
          ) : (
            ""
          )}
          {product.is_top ? (
            <label className="product-label label-top">Top</label>
          ) : (
            ""
          )}
          {product.discount > 0 ? (
            product.variants.length === 0 ? (
              <label className="product-label label-sale">
                {product.discount}% OFF
              </label>
            ) : (
              <label className="product-label label-sale">Sale</label>
            )
          ) : (
            ""
          )}
        </div>

        <div className="product-action-vertical">
          <a href="#" className="btn-product-icon btn-cart" title="Add to cart">
            <i className="d-icon-bag"></i>
          </a>
        </div>

        <div className="product-action">
          <ALink
            href="#"
            className="btn-product btn-quickview"
            title="Quick View"
          >
            Quick View
          </ALink>
        </div>
      </figure>

      <div className="product-details">
        {isCategory ? (
          <div className="product-cat">
            {product.categories
              ? product.categories.map((item, index) => (
                  <React.Fragment key={item.name + "-" + index}>
                    <ALink
                      href={{
                        pathname: "/shop",
                        query: { category: item.slug },
                      }}
                    >
                      {item.name}
                      {index < product.categories.length - 1 ? ", " : ""}
                    </ALink>
                  </React.Fragment>
                ))
              : ""}
          </div>
        ) : (
          ""
        )}

        <h3 className="product-name">
          <ALink href={`/product/default/${product.slug}`}>
            {product.title}
          </ALink>
        </h3>

        <div className="product-price">
          <ins className="new-price">${product.price} / week</ins>
        </div>

        <div className="ratings-container">
          <div className="ratings-full">
            <span
              className="ratings"
              style={{ width: 20 * product.ratings + "%" }}
            ></span>
            <span className="tooltiptext tooltip-top">
              {toDecimal(product.ratings)}
            </span>
          </div>

          <ALink
            href={`/product/default/${product.slug}`}
            className="rating-reviews"
          >
            ( {product.reviews} reviews )
          </ALink>
        </div>
      </div>
    </div>
  );
}

export default ProductTwo;
