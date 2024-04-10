import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ALink from "@/components/features/CustomLink";

import { videoHandler } from "@/utils";

function PostEight(props) {
  const {
    post,
    adClass = "mb-7",
    btnText = "Read more",
    btnAdClass = "",
  } = props;
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    <div className={`post post-frame ${adClass}`}>
      <figure className="post-media">
        <ALink href={`/blog/single/${post.slug}`}>
          <LazyLoadImage
            src={`./images/blogs/${post?.imgUrl}`}
            alt="post image"
            width={320}
            height={206}
            effect="opacity; transform"
            style={{ backgroundColor: "#DEE6E8" }}
          />
        </ALink>

        <div className="post-calendar">
          <span className="post-day">5</span>
          <span className="post-month">
            Mar
          </span>
        </div>
      </figure>

      <div className="post-details">
        <h4 className="post-title">
          <ALink href={`/blog/single/${post.slug}`}>{post.title}</ALink>
        </h4>
        <p className="post-content">{post.content}</p>
        <ALink
          href={`/blog/single/${post.slug}`}
          className={`btn btn-primary btn-link btn-underline ${btnAdClass}`}
        >
          SHOP NOW
          <i className="d-icon-arrow-right"></i>
        </ALink>
      </div>
    </div>
  );
}

export default PostEight;
