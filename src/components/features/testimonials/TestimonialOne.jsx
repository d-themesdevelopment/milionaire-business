const TestimonialOne = () => {
  return (
    <div className="review">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <div className="icon mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"
              ></path>
            </svg>
          </div>

          <div className="details">
            <h6 className="mb-1">Nilowss Liang</h6>

            <div className="ratings-container mb-0">
              <div className="ratings-full">
                <span className="ratings" style={{ width: "70%" }}></span>
                <span className="tooltiptext tooltip-top">3.50</span>
              </div>
              <a class="rating-reviews" href="#">
                4.3
              </a>
            </div>
          </div>
        </div>

        <p>Mar 02, 2024</p>
      </div>

      <p className="text-sm mb-0">
        We didnt have a tubing game because of the strong wind, a bit of pity.
        Otherwise, everything was great and everyone had a great time. The
        captains are friendly and professional. Thank you so much.
      </p>
    </div>
  );
};

export default TestimonialOne;
