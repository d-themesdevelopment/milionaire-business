import { useEffect, useState } from "react";
// import InputRange from "react-input-range";

import ALink from "@/components/features/CustomLink";
import { Slider } from "antd";

function SidebarFilterOne(props) {
  const { type = "left", isFeatured = false } = props;

  const [filterPrice, setPrice] = useState({ min: 10, max: 700 });

  useEffect(() => {
    window.addEventListener("resize", hideSidebar);

    return () => {
      window.removeEventListener("resize", hideSidebar);
    };
  }, []);

  const onChangePrice = (value) => {
    setPrice(value);
  };

  const toggleSidebar = (e) => {
    e.preventDefault();
    document
      .querySelector("body")
      .classList.remove(
        `${
          type === "left" || type === "off-canvas"
            ? "sidebar-active"
            : "right-sidebar-active"
        }`
      );

    let stickyWraper = e.currentTarget.closest(".sticky-sidebar-wrapper");

    let mainContent = e.currentTarget.closest(".main-content-wrap");
    if (mainContent && type !== "off-canvas" && query.grid !== "4cols")
      mainContent.querySelector(".row.product-wrapper") &&
        mainContent
          .querySelector(".row.product-wrapper")
          .classList.toggle("cols-md-4");

    if (mainContent && stickyWraper) {
      stickyWraper.classList.toggle("closed");

      if (stickyWraper.classList.contains("closed")) {
        mainContent.classList.add("overflow-hidden");
        clearTimeout(timerId);
      } else {
        timerId = setTimeout(() => {
          mainContent.classList.remove("overflow-hidden");
        }, 500);
      }
    }
  };

  const showSidebar = (e) => {
    e.preventDefault();
    document.querySelector("body").classList.add("sidebar-active");
  };

  const hideSidebar = () => {
    document
      .querySelector("body")
      .classList.remove(
        `${
          type === "left" ||
          type === "off-canvas" ||
          type === "boxed" ||
          type === "banner"
            ? "sidebar-active"
            : "right-sidebar-active"
        }`
      );
  };


  return (
    <aside
      className={`col-lg-3 shop-sidebar skeleton-body sidebar-fixed sticky-sidebar-wrapper sidebar-toggle-remain sidebar`}
    >
      <div className="sidebar-overlay" onClick={hideSidebar}></div>

      {/* <ALink className="sidebar-close" href="#" onClick={hideSidebar}>
        <i className="d-icon-times"></i>
      </ALink> */}

      <div className="sidebar-content">
        <div className="sticky-sidebar">
          <div className="filter-actions mb-4">
            <a
              href="#"
              className="sidebar-toggle-btn toggle-remain btn btn-outline btn-primary btn-icon-right btn-rounded"
              onClick={toggleSidebar}
            >
              Filter
              {type === "left" || type === "off-canvas" ? (
                <i className="d-icon-arrow-left"></i>
              ) : (
                <i className="d-icon-arrow-right"></i>
              )}
            </a>
            <ALink href={"/"} scroll={false} className="filter-clean">
              Clean All
            </ALink>
          </div>

          <div class="widget widget-collapsible">
            <a class="parse-content expanded" href="#">
              <h3 class="widget-title">
                All Categories
                <span class="toggle-btn p-0 parse-content"></span>
              </h3>
            </a>
            <div class="overflow-hidden" style={{ overflow: "hidden" }}>
              <ul class="widget-body filter-items search-ul">
                <li class="">
                  <a href="#">
                    Cosmetic
                  </a>
                </li>
                <li class="">
                  <a href="#">
                    Fashionable Womens
                  </a>
                </li>
                <li class="">
                  <a href="#">
                    For Mens
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="widget widget-collapsible">
            <a class="parse-content expanded" href="#">
              <h3 class="widget-title">
                Filter by Price
                <span class="toggle-btn p-0 parse-content"></span>
              </h3>
            </a>
            <div class="overflow-hidden" style={{ overflow: "hidden" }}>
              <div class="widget-body">
                <form action="#">
                  <Slider range defaultValue={[20, 50]} />

                  <div class="filter-actions">
                    <div class="filter-price-text mb-4">
                      Price: $0 - $1000<span class="filter-price-range"></span>
                    </div>
                    <button
                      class="btn btn-dark btn-filter btn-rounded"
                      fdprocessedid="dwmmv"
                    >
                      Filter
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="widget widget-collapsible">
            <a class="parse-content expanded" href="#">
              <h3 class="widget-title">
                Size<span class="toggle-btn p-0 parse-content"></span>
              </h3>
            </a>
            <div class="overflow-hidden" style={{ overflow: "hidden" }}>
              <ul class="widget-body filter-items">
                <li class="">
                  <a href="#">Extra Large</a>
                </li>
                <li class="">
                  <a href="#">Large</a>
                </li>
                <li class="">
                  <a href="#">Medium</a>
                </li>
                <li class="">
                  <a href="#">Small</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="widget widget-collapsible">
            <a class="parse-content expanded" href="#">
              <h3 class="widget-title">
                Color<span class="toggle-btn p-0 parse-content"></span>
              </h3>
            </a>
            <div class="overflow-hidden" style={{ overflow: "hidden" }}>
              <ul class="widget-body filter-items">
                <li class="">
                  <a href="#">Black</a>
                </li>
                <li class="">
                  <a href="#">Blue</a>
                </li>
                <li class="">
                  <a href="#">Brown</a>
                </li>
                <li class="">
                  <a href="#">Green</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SidebarFilterOne;
