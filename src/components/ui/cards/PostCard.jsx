import React from "react";
import MenuLink from "../../menu-link";
import Img from "gatsby-image";

const PostCard = ({ slug, title, image, excerpt, modifier }) => {
  return (
    <div className={`post-card ${modifier}`}>
      <div className="post-card__inner">
        <div className="post-card__image">
          <Img fluid={image} alt={title} />
        </div>
        <div className="post-card__text">
          <h3 className="post-card__title card-title">{title}</h3>
          <div className="post-card__excerpt">{excerpt}</div>
          <div className="post-card__btn">
            <MenuLink className={`btn`} to={`/post/${slug}`} direction="top">
              <span className="btn__text">Read more</span>
            </MenuLink>
          </div>
        </div>
      </div>
    </div>
  );
};

PostCard.defaultProps = {
  excerpt: "",
  image: "../images/blogs/default.jpg",
};

export default PostCard;
