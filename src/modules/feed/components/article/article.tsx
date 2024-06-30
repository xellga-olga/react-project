import { FC } from "react";
import { Link } from "react-router-dom";
import { FavoriteButton } from "../favorite-button/favorite-button";
import { TagList } from "../tag-list/tag-list";

interface ArticleProps {}

export const Article: FC<ArticleProps> = () => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4  font-light">
          <Link to="/@nokwin">
            <img
              alt="nokwin avatart"
              className="inline-block h-10 w-10 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTvVY1pDDV4ak6stjFjx7q9iDtyeZ8lQr6A&s"
            />
          </Link>
          <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col justify-between">
            <Link to="/@nokwin" className="font-medium">
              First User
            </Link>
            <span className="text-theme-lightGray text-date">28 june, 2024</span>
            
          </div>

          <FavoriteButton />
        </div>
        
        <Link className="hover:no-underline" to='/article/qwert'>
        <h1 className="mb-1 font-semibold text-2xl text-inherit text-theme-black">In today’s world, creativity is the key to success. Welcome to Brainstorm Hub, your ultimate destination for igniting creativity and fostering innovation.

At Brainstorm Hub, we believe in the power of collective thinking. Our platform brings together diverse minds, encouraging users to share, discuss, and refine ideas. Here, every thought matters.

Why Brainstorm Hub? Because creativity thrives in a collaborative environment. Our user-friendly interface and interactive tools make it easy for anyone to participate.

Join Brainstorm Hub today and be part of a community that values innovation. Let's brainstorm, collaborate, and create something extraordinary together!</h1>
        <p className="text-theme-darkenGray mb-1 font-light">Ignite your creativity with collaborative brainstorming.</p>
        <div className="flex justify-between">
        <span className="text-theme-gray text-date font-light">Read more...</span>
        <TagList />
        </div>
        </Link>
      </div>
    </article>
  );
};
