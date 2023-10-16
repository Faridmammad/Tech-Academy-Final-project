import React from 'react'
import BlogCard from '../../components/Cards/BlogCard'
import "./blogs.scss"
import Button from '../../components/Button';
import "../../assets/fonts/fonts.css"

const Blogs = () => {
  return (
   
    <div className="blog_container">

      <div className="blog_container_subtitle">
        Learn with us
      </div>
      <div className="blog_container_title">
        The Blog
      </div>

<div className="blog_container_posts">
  
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>

</div>

<div className="blog_container_subs">
    <div className="blog_container_subs_heading">
      <div className="blog_container_subs_title">Subscribe For Latest Newsletter</div>
      <div className="blog_container_subs_subtitle">The gradual accumulation of information about atomic and 
small-scale behavior during the first quarter of the 20th </div>
    </div>

    <div className="blog_container_subs_button">
      <Button label="Get started" className="custom-button-style"/>
    </div>
 


</div>





    </div>
  )
}

export default Blogs