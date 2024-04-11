export default function ToolBox(props) {
  return (
    <nav class="toolbox sticky-toolbox sticky-content fix-top">
      <div class="toolbox-left">
        <a
          class="toolbox-item left-sidebar-toggle btn btn-outline btn-primary btn-rounded btn-sm btn-icon-right d-lg-none"
          href="/react/riode/demo-1/shop/#"
        >
          Filter<i class="d-icon-arrow-right"></i>
        </a>
        <div class="toolbox-item toolbox-sort select-menu">
          <select name="orderby" class="form-control" fdprocessedid="knizon">
            <option value="default" selected="">
              Default
            </option>
            <option value="popularity">Most Popular</option>
            <option value="rating">Average rating</option>
            <option value="date">Latest</option>
            <option value="price-low">Sort forward price low</option>
            <option value="price-high">Sort forward price high</option>
            <option value="">Clear custom sort</option>
          </select>
        </div>
      </div>
      <div class="toolbox-right">
        <div class="toolbox-item toolbox-show select-box text-dark">
          <label>Show :</label>
          <select name="count" class="form-control" fdprocessedid="fu3jvm">
            <option value="12" selected="">
              12
            </option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
        </div>
        <div class="toolbox-item toolbox-layout ">
          <a
            class="d-icon-mode-list btn-layout "
            href="/react/riode/demo-1/shop/?type=list"
          ></a>
          <a
            className="d-icon-mode-grid btn-layout active"
            href="/react/riode/demo-1/shop/?type=grid"
          ></a>
        </div>
      </div>
    </nav>
  );
}
