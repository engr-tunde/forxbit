import React from "react";
import { blogPosts } from "../../utils/data";
import { Link } from "react-router-dom";
import CustomFormik from "../../utils/CustomFormik";
import { joinValues } from "../../utils/initialValues";
import { validateJoin } from "../../utils/validate";
import { successNotification } from "../../utils/helpers";
import InputField from "../forms/InputField";
import SubmitButton from "../forms/SubmitButton";
// import { useFormikContext } from "formik";
import { useFormikContext } from "formik";

const BlogSingleTopRight = ({ post }) => {
  const related = blogPosts
    .filter((item) => item.category === post.category)
    .slice(0, 3);

  const initialValues = joinValues();
  const validationSchema = validateJoin();

  // const { isSubmitting } = useFormikContext();

  const handleSubmit = (values, actions) => {
    // console.log({ isSubmitting });
    successNotification("Success!");
    // actions.setSubmitting(false);
    // console.log({ isSubmitting });
  };
  return (
    <div className="col-span-1 lg:col-span-2 w-full">
      <div className="sticky mb-10 top-0 right-0">
        <div className="p-5 bg-titusDarkGrey rounded-lg mb-10 ">
          <h3 className="text-white text-xl border-l-2 border-l-titusGreenFaded pl-3 mb-4">
            Related Articles
          </h3>
          <div className="flex flex-col gap-4">
            {related.map((item, i) => (
              <Link
                to={`posts/${item.permalink}`}
                key={i}
                className="text-sm hover:text-titusGreenFaded duration-200 ease-in"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="p-5 bg-titusDarkGrey rounded-lg flex flex-col gap-4">
          <span className="text-white text-lg">
            Join the Titus Gangs! Enjoy lightening speed trading experience with
            the least transaction charges possible
          </span>
          <CustomFormik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <InputField name="email" placeholder="Email or Phone" />
            <SubmitButton title="Join now" className="mt-6 w-[100%]" />
          </CustomFormik>
        </div>
      </div>
    </div>
  );
};

export default BlogSingleTopRight;
