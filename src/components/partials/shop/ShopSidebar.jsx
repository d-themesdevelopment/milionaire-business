import { useEffect, useState } from "react";
import InputRange from "react-input-range";

import ALink from "@/components/features/CustomLink";
import Card from "@/components/features/accordion/Card";

import SlideToggle from "react-slide-toggle";

import filterData from "@/utils/data/shop";
import { scrollTopHandler } from "@/utils";

function SidebarFilterOne(props) {
  const { type = "left", isFeatured = false } = props;


  const [ filterPrice, setPrice ] = useState( {min: 10, max: 700} );

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

          <div className="widget widget-collapsible">
            <Card
              title="<h3 class='widget-title'>All Categories<span class='toggle-btn p-0 parse-content'></span></h3>"
              type="parse"
              expanded={true}
            >
              <ul className="widget-body filter-items search-ul">
                <li className="">
                  <a href="#">Cosmetic</a>
                </li>
                <li className="">
                  <a href="#">Fashionable</a>
                </li>
                <li className="">
                  <a href="#">For Boat</a>
                </li>
              </ul>
            </Card>
          </div>

          <div className="widget widget-collapsible">
            <Card
              title="<h3 class='widget-title'>Filter by Price<span class='toggle-btn p-0 parse-content'></span></h3>"
              type="parse"
              expanded={true}
            >
              <div className="widget-body">
                <form action="#">
                  <div className="filter-price-slider noUi-target noUi-ltr noUi-horizontal shop-input-range">
                    <InputRange
                      formatLabel={(value) => `$${value}`}
                      maxValue={1000}
                      minValue={0}
                      step={50}
                      value={filterPrice}
                      onChange={onChangePrice}
                    />
                  </div>

                  <div className="filter-actions">
                    <div className="filter-price-text mb-4">
                      Price: $0 - $1000
                      <span className="filter-price-range"></span>
                    </div>

                    <button className="btn btn-dark btn-filter btn-rounded">
                      Filter
                    </button>
                  </div>
                </form>
              </div>
            </Card>
          </div>

          <div className="widget widget-collapsible">
            <Card
              title="<h3 class='widget-title'>Size<span class='toggle-btn p-0 parse-content'></span></h3>"
              type="parse"
              expanded={true}
            >
              <ul className="widget-body filter-items">
                {filterData.sizes.map((item, index) => (
                  <li key={item + " - " + index}>
                    <ALink scroll={false} href={"/"}>
                      {item.name}
                    </ALink>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="widget widget-collapsible">
            <Card
              title="<h3 class='widget-title'>Color<span class='toggle-btn p-0 parse-content'></span></h3>"
              type="parse"
              expanded={true}
            >
              <ul className="widget-body filter-items">
                {filterData.colors.map((item, index) => (
                  <li key={item + " - " + index}>
                    <ALink scroll={false} href={"/"}>
                      {item.name}
                    </ALink>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SidebarFilterOne;
