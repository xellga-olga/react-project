import { FC } from "react";
import { Link } from "react-router-dom";
import { FavoriteButton } from "../favorite-button/favorite-button";

interface ArticleProps {}

export const Article: FC<ArticleProps> = () => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4  font-light">
          <Link to="/@nokwin">
            <img
              src="https://img.freepik.com/free-photo/3d-illustration-female-doctor-white-cap-glasses_1142-42818.jpg?t=st=1719575772~exp=1719579372~hmac=cdcec3465c76d34b7e1fc652b6d87ba61537fee4be0232078b47e42f01bc964e&w=1060"
              alt="nokwin avatart"
              className="inline-block h-8 w-8 rounded-full"
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
      </div>
    </article>
  );
};
