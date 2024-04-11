// import ToolBox from "@/components/partials/shop/toolbox";
import ProductTwo from "@/components/features/products/ProductTwo";
import ToolBox from "./Toolbox";
// import Pagination from "@/components/features/pagination";

function ProductListOne(props) {
  const { itemsPerRow = 3, type = "left", isToolbox = true } = props;

  const products = [
    {
      slug: "moka-star",
      title: "Moka Star",
      categories: [
        {
          name: "MEDITERRANEAN",
          slug: "1",
        },
        {
          name: "CARIBBEAN",
          slug: "2",
        },
      ],
      price: 8500,
      ratings: 5,
      is_new: true,
      imgUrl: "product1.jpg",
    },
    {
      slug: "moka-star",
      title: "Moka Star",
      categories: [
        {
          name: "MEDITERRANEAN",
          slug: "1",
        },
        {
          name: "CARIBBEAN",
          slug: "2",
        },
      ],
      price: 8500,
      ratings: 5,
      is_new: true,
      imgUrl: "product2.jpg",
    },
    {
      slug: "moka-star",
      title: "Moka Star",
      categories: [
        {
          name: "MEDITERRANEAN",
          slug: "1",
        },
        {
          name: "CARIBBEAN",
          slug: "2",
        },
      ],
      price: 8500,
      ratings: 5,
      is_new: true,
      imgUrl: "product3.jpg",
    },
    {
      slug: "moka-star",
      title: "Moka Star",
      categories: [
        {
          name: "MEDITERRANEAN",
          slug: "1",
        },
        {
          name: "CARIBBEAN",
          slug: "2",
        },
      ],
      price: 8500,
      ratings: 5,
      is_new: true,
      imgUrl: "product4.jpg",
    },
    {
      slug: "moka-star",
      title: "Moka Star",
      categories: [
        {
          name: "MEDITERRANEAN",
          slug: "1",
        },
        {
          name: "CARIBBEAN",
          slug: "2",
        },
      ],
      price: 8500,
      ratings: 5,
      is_new: true,
      imgUrl: "product1.jpg",
    },
    {
      slug: "moka-star",
      title: "Moka Star",
      categories: [
        {
          name: "MEDITERRANEAN",
          slug: "1",
        },
        {
          name: "CARIBBEAN",
          slug: "2",
        },
      ],
      price: 8500,
      ratings: 5,
      is_new: true,
      imgUrl: "product2.jpg",
    },
    {
      slug: "moka-star",
      title: "Moka Star",
      categories: [
        {
          name: "MEDITERRANEAN",
          slug: "1",
        },
        {
          name: "CARIBBEAN",
          slug: "2",
        },
      ],
      price: 8500,
      ratings: 5,
      is_new: true,
      imgUrl: "product3.jpg",
    },
    {
      slug: "moka-star",
      title: "Moka Star",
      categories: [
        {
          name: "MEDITERRANEAN",
          slug: "1",
        },
        {
          name: "CARIBBEAN",
          slug: "2",
        },
      ],
      price: 8500,
      ratings: 5,
      is_new: true,
      imgUrl: "product4.jpg",
    },
    {
      slug: "moka-star",
      title: "Moka Star",
      categories: [
        {
          name: "MEDITERRANEAN",
          slug: "1",
        },
        {
          name: "CARIBBEAN",
          slug: "2",
        },
      ],
      price: 8500,
      ratings: 5,
      is_new: true,
      imgUrl: "product1.jpg",
    },
    {
      slug: "moka-star",
      title: "Moka Star",
      categories: [
        {
          name: "MEDITERRANEAN",
          slug: "1",
        },
        {
          name: "CARIBBEAN",
          slug: "2",
        },
      ],
      price: 8500,
      ratings: 5,
      is_new: true,
      imgUrl: "product2.jpg",
    },
    {
      slug: "moka-star",
      title: "Moka Star",
      categories: [
        {
          name: "MEDITERRANEAN",
          slug: "1",
        },
        {
          name: "CARIBBEAN",
          slug: "2",
        },
      ],
      price: 8500,
      ratings: 5,
      is_new: true,
      imgUrl: "product3.jpg",
    },
    {
      slug: "moka-star",
      title: "Moka Star",
      categories: [
        {
          name: "MEDITERRANEAN",
          slug: "1",
        },
        {
          name: "CARIBBEAN",
          slug: "2",
        },
      ],
      price: 8500,
      ratings: 5,
      is_new: true,
      imgUrl: "product4.jpg",
    },
  ];

  return (
    <>
      <ToolBox type={"horizontal"} />

      <div className={`row product-wrapper cols-2 cols-sm-3`}>
        {products &&
          products.map((item) => (
            <div className="product-wrap" key={"shop-" + item.slug}>
              <ProductTwo product={item} adClass="" />
            </div>
          ))}
      </div>

      <div className="toolbox toolbox-pagination">
        <p className="show-info">
          Showing <span>1 - 12 of 18</span>Products
        </p>
        <ul className="pagination">
          <li className="page-item disabled">
            <a
              className="page-link page-link-prev"
              href="/shop/#"
            >
              <i className="d-icon-arrow-left"></i>Prev
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="/shop/#">
              1<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="page-item ">
            <a className="page-link" href="/shop/?page=2">
              2
            </a>
          </li>
          <li className="page-item ">
            <a
              className="page-link page-link-next"
              href="/shop/?page=2"
            >
              Next<i className="d-icon-arrow-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProductListOne;
