import React from "react";
import Searchpart from "./Searchpart";
import RecentPost from "./RecentPost";
import Comment from "./Comment";
import PopularPost from "./PopularPost";
import ExploreTopics from "./ExploreTopics";
import Celebration from "./Celebration";
import { blogimg, blogminiimg } from "../../Images/Image";
import { blogDescriptionData } from "../../Data/data";
import FAQBlog from "./FAQBlog";
import CommentForm from "./CommentForm";

const BlogDescriptioherosection = () => {
  return (
    <section className="bg-black px-3 lg:px-30 py-15 lg:py-33    ">
      <div className="lg:flex">
        <div className="mt-8">
          <p className="text-gray-400">
            Best Makeup Academy and Beauty Courses UK International /{" "}
            <span>Blog</span> /{" "}
            <span className="text-white">
              10 Trendy Short Hairstyles for Girls with Curly Hair
            </span>
          </p>
          <div>
            <h2 className="text-white mt-8 text-4xl">
              10 Trendy Short Hairstyles for Girls with Curly Hair
            </h2>
            <div className="my-6 text-gray-400 flex   items-center space-x-4">
              <img
                className="rounded-full"
                src={blogminiimg}
                alt="ukimage"
                width={40}
              />
              <h2>UKInternatioal</h2>
              <p>Blog</p>
              <span>August 26, 2024</span>
            </div>
            <img className="rounded-lg" src={blogimg} alt="fullimage" />
            <p className="text-white mt-6 text-[1.1rem] lg:w-[90%]">
              Curly hair is both a blessing and a challenge. While it naturally
              adds texture and volume, styling it in a manageable yet
              fashionable way can be tricky. However, when it comes to short
              hairstyles, girls with curly hair have plenty of stylish options
              that bring out the best in their curls. Whether you prefer a
              classic cut or something more daring, here are 10 fabulous short
              hairstyles for girls with curly hair.
            </p>
          </div>
          <div className="space-y-4 mt-4">
            {blogDescriptionData.map((value, index) => (
              <>
                <div key={index} className="text-white">
                  <h2 className="text-4xl font-semibold">{value.head}</h2>
                  <p className="my-2 text-[1.1rem] lg:w-[90%]">{value.para}</p>
                  <h3 className="text-3xl font-semibold">{value.Skils}</h3>
                  {value.ArraySkill.map((value) => (
                    <>
                      <ul className="space-y-2 mt-2 ml-4 list-disc">
                        <li>{value}</li>
                      </ul>
                    </>
                  ))}
                </div>
              </>
            ))}
          </div>
          <FAQBlog />
          <CommentForm />
        </div>
        <div>
          <Searchpart />
          <RecentPost />
          <Comment />
          <PopularPost />
          <ExploreTopics />
          <Celebration />
        </div>
      </div>
    </section>
  );
};

export default BlogDescriptioherosection;
