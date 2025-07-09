import React from "react";

const BlogSingleTopLeft = ({ post }) => {
  return (
    <div className="col-span-1 lg:col-span-5 pr-7 border-r-[1px] border-r-titusGreenFaded flex flex-col gap-8">
      <h1 className="text-2xl lg:text-4xl text-white">{post.title}</h1>
      <span className="bg-titusDarkGrey py-[6px] px-4 w-max text-white rounded-sm text-sm">
        {post.category}
      </span>
      <img
        src={`/assets/images/media/${post.image}`}
        alt=""
        className="w-full h-[400px]"
      />
      <div
        className="text-[#ffffffb0]"
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      ></div>
    </div>
  );
};

export default BlogSingleTopLeft;
