import React from "react";

import ShopBanner from "@/components/partials/shop/ShopBanner";
import SidebarFilterOne from "@/components/partials/shop/ShopSidebar";
import ProductListOne from "@/components/partials/shop/ProductListOnce";
import EventBanner from "@/components/partials/event/EventBanner";
// import SidebarFilterOne from "~/components/partials/shop/sidebar/sidebar-filter-one";
// import ProductListOne from "~/components/partials/shop/product-list/product-list-one";

function Event() {
  return (
    <main className="main">
      <EventBanner />

      <div className="page-content mb-10 pb-3">
        <div className="container">
          <div className="row gutter-lg main-content-wrap">
            <SidebarFilterOne />

            <div className="col-lg-9 main-content">
              <ProductListOne itemsPerRow={3} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default React.memo(Event);
