import DescOne from "@/components/partials/product/DescOne";
import DetailsOne from "@/components/partials/product/DetailsOne";
import MediaOne from "@/components/partials/product/MediaOne";
import RelatedProducts from "@/components/partials/product/RelatedProducts";

const ProductDefault = () => {
  return (
    <main className="main mt-6 single-product">
      <div className={`page-content mb-10 pb-6`}>
        <div className="container vertical">
          <div className="product product-single row mb-7">
            <div className="col-md-6 sticky-sidebar-wrapper">
              <MediaOne />
            </div>

            <div className="col-md-6">
              <DetailsOne />
            </div>
          </div>

          <DescOne />
        </div>

        <RelatedProducts />
      </div>
    </main>
  );
};

export default ProductDefault;
