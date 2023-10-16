import React from 'react'
import BlogCard from '../../components/Cards/BlogCard'
import "./blogs.scss"
import "../../assets/fonts/fonts.css"
import BlogSubs from "../../components/BlogSubs"

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

<BlogSubs/>
    </div>
  )
}

export default Blogs