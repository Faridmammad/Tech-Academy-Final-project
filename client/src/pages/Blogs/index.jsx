import React from 'react'
import BlogCard from '../../components/Cards/BlogCard'
import "./blogs.scss"
import "../../assets/fonts/fonts.css"
import BlogSubs from "../../components/BlogSubs"
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../../store/reducer/blogs/blogThunk";
const Blogs = () => {

  const {
    blogs: { data },
    status,
  } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  console.log(data, "blogss");

  React.useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }


  return (
   
    <div className="blog_container">

      <div className="blog_container_subtitle">
        Learn with us
      </div>
      <div className="blog_container_title">
        The Blog
      </div>

<div className="blog_container_posts">
     {status === "success" &&
          data.slice(0, 6).map(({ id, attributes }) => (
            <BlogCard className="blog_blogcard"
            key={id}
            image={attributes.images?.data[0].attributes.url}
            tag={attributes.tags?.data[0].attributes.title}
            title={attributes.title}
            description={attributes.description}
            date={attributes.date}
          />
          ))}

</div>

<BlogSubs/>
    </div>
  )
}

export default Blogs