import { useEffect } from "react";
import Head from "../../components/Head";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../../utils/data";
import BlogSingleTopLeft from "../../components/blog/BlogSingleTopLeft";
import BlogSingleTopRight from "../../components/blog/BlogSingleTopRight";
import { dateFormatter, shuffleArray } from "../../utils/helpers";

const BlogSinglePage = () => {
  const { permalink } = useParams();
  const post = blogPosts.filter((item) => item.permalink === permalink)[0];
  const relatedPosts = shuffleArray(
    blogPosts.filter((item) => item.category === post.category).slice(0, 3)
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  console.log({ post });
  return (
    <>
      <Head pageTitle={post ? post.title : "Article"} />
      <div className="w-[100vw] bg-titusDarkBG">
        <div className="container pt-[19vh] md:pt-[120px] pb-[180px] md:pb-[200px] px-7 lg:px-0">
          <div className="w-full grid grid-cols-1 lg:grid-cols-7 gap-10 relative">
            <BlogSingleTopLeft post={post} />
            <BlogSingleTopRight post={post} />
          </div>

          <div className="mt-24">
            <h1 className="text-white text-2xl lg:text-4xl font-bold mb-10">
              Related
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
              {relatedPosts.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between gap-4 bg-[#15151799] rounded-0 hover:scale-[1.02] duration-200 ease-in"
                  style={{ boxShadow: "0px 0px 2px #000" }}
                >
                  <img
                    src={`/assets/images/media/${item.image}`}
                    alt=""
                    className="h-[180px] lg:h-[220px] rounded-t-0"
                  />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSinglePage;
