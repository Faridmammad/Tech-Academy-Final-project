import "./blogsubs.scss"
import "../../assets/fonts/fonts.css"
import Button from '../../components/Button';
import React from 'react'

const BlogSubs = () => {
  return (
    

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



  )
}

export default BlogSubs