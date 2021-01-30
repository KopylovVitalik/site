import React from "react";
import MenuLink from "../components/menu-link";

const PostCard = ({ slug, title }) => {
  return (
    <div className="post-card">
      <div className="post-card__inner">
        <header className="post-card__header">
          <h3 className="is-size-4 post-card__title">{title}</h3>
        </header>
        <div className="post-card__content">
          <div className="content">
            <MenuLink className={`btn`} to={`/post/${slug}`} direction="top">
              <span className="btn__text">More about</span>
            </MenuLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
