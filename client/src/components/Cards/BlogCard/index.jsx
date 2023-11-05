
import "../../../assets/fonts/fonts.css";
import "./BlogCard.scss";
/* import { arrow_right2, date_icon, stat_icon } from "../../../assets/icons";
import { makaroni } from "../../../assets/images/"; */
const BlogCard = ({ title, category, image, description, className  }) => {
  return (

<>
<div className={`blog-card ${className}`}>
      <img src={`${import.meta.env.VITE_UPLOAD_IMG}${image}`} alt={title} />
      
      <h1 className="blog-title">{title}</h1>
      <p className="blog_category">{category}</p>
      <p className="blog-description">{description}</p>
    </div>
</>

 /*    <div className="blogcard_container">




      <img className="blogcard_img" src={makaroni} />

      <div className="blogcard_details">
        <div className="img_tags">
          <div className="img_tag1">Google</div>
          <div className="img_tag2">Trending</div>
          <div className="img_tag3">New</div>
        </div>
        <div className="blogcard_title">
          Loudest à la Madison #1 (L'integral)
        </div>
        <div className="blogcard_subtitle">
          Lorem ipsum dollorem30 Lorem ipsum dolor sit amet consectetur
          adipisicing elit. In accusantium explicabo voluptates ipsam magni eum
          beatae molestias ducimus iste dolor? Voluptates veritatis praesentium
          molestias suscipit. or sit amet consectetur adipisicing elit.
          Veritatis, necessitatibus?
        </div>
        <div className="blogcard_datestat">
          <div className="blogcard_date">
            <img src={date_icon}></img>22 April 2021
          </div>
          <div className="blogcard_stat">
            <img src={stat_icon}></img>10 comments
          </div>
        </div>
        <div className="blogcard_learnmore">
          <a href="/">Learn More</a>
          <img src={arrow_right2}></img>
        </div>
      </div>
    </div> */
  );
};

export default BlogCard;
