import React from "react";
import { dateFormatter } from "../../utils/helpers";
import { Link } from "react-router-dom";

const BlogSectionOne = ({ post }) => {
  console.log({ post });
  return (
    <div className="">
      <div className=" items-center grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        <div className="col-span-1 lg:col-span-2 bg-titusGreenDeep">
          <Link to={`/posts/${post.permalink}`}>
            <img
              src={`/assets/images/media/${post.image}`}
              alt=""
              className="h-[250px] lg:h-[400px]"
            />
          </Link>
        </div>
        <div className="col-span-1 flex flex-col gap-3">
          <span className="uppercase">{post.category}</span>
          <Link
            to={`/posts/${post.permalink}`}
            className="text-white text-[22px] md:text-[27px] leading-[1.23em] hover:text-titusGreenFaded"
          >
            {post.title}
          </Link>
          <div
            className="text-sm mb-5 lg:mb-8"
            dangerouslySetInnerHTML={{
              __html: `${post.content.substring(0, 150)}....`,
            }}
          ></div>
          <span className="font-semibold">{dateFormatter(post.date)}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogSectionOne;
