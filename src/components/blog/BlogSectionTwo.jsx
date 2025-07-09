import React from "react";
import { dateFormatter } from "../../utils/helpers";
import { Link } from "react-router-dom";

const BlogSectionTwo = ({ posts }) => {
  console.log({ posts });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
      {posts.map((item, i) => (
        <div
          key={i}
          className="flex flex-col justify-between gap-4 bg-[#15151799] rounded-0 hover:scale-[1.02] duration-200 ease-in"
          style={{ boxShadow: "0px 0px 2px #000" }}
        >
          <Link to={`/posts/${item.permalink}`}>
            <img
              src={`/assets/images/media/${item.image}`}
              alt=""
              className="h-[180px] lg:h-[220px] rounded-t-0"
            />
          </Link>
          <div className="col-span-1 flex flex-col gap-3 p-3 lg:p-5">
            <span className="uppercase text-sm font-medium">
              {item.category}
            </span>
            <Link
              to={`/posts/${item.permalink}`}
              className="text-white text-[18px] md:text-[20px] leading-[1.26em] font-semibold mb-5 hover:text-titusGreenFaded"
            >
              {item.title}
            </Link>
            <span className="text-sm font-semibold">
              {dateFormatter(item.date)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSectionTwo;
