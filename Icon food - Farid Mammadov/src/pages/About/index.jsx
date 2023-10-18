import React from "react";
import UserCard from "../../components/Cards/UserCard";

import "../../assets/fonts/fonts.css";
import "./about.scss";
import Button from "../../components/Button";
import { logo1, logo2, logo3, logo4, logo5, logo6 } from "../../assets/icons";
import {
  about_img,
  testimonials_img,
  video_desktop,
  video_mobile,
} from "../../assets/images";

const About = () => {
  return (
    <div className="about_container">
      <div className="about_header">
        <div className="about_info">
          <div className="about_title">About us</div>
          <div className="about_subtitle">
            We know how large objects will act, but things on a small scale
          </div>
          <Button label="Get quote now" className="about_button" />
        </div>

        <div className="about_img">
          <img src={about_img} />
        </div>
      </div>

      <div className="about_content">
        <div className="content_left">

           <div className="content_subtitle">
            <h6>Problems trying</h6>
          </div>
          <div className="content_title">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </div>
         
        </div>
        <div className="content_right">
          <p>

            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          
        </div>
      </div>

      <div className="about_stats">
        <div className="stat1">
          <div className="number">15K</div>
          <div className="txt">Happy Customers</div>
        </div>
        <div className="stat2">
          <div className="number">150K</div>
          <div className="txt">Monthly Visitors</div>
        </div>
        <div className="stat3">
          <div className="number">15</div>
          <div className="txt">Countries Worldwide</div>
        </div>
        <div className="stat4">
          <div className="number">100+</div>
          <div className="txt">Top Partners</div>
        </div>
      </div>

      <div className="about_video">
        <img className="video_desktop" src={video_desktop} />
        <img className="video_mobile" src={video_mobile} />
      </div>

      <div className="about_users">
        <div className="about_users_title">
          <h2>Meet Our Team</h2>
        </div>
        <div className="_about_users_cards">
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>

      <div className="about_companies">
        <div className="about_companies_title">Big Companies Are Here</div>
        <div className="about_companies_subtitle">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </div>
        <div className="about_companies_logos">
          <ul>
            <li>
              <a href="/">
                <img src={logo1} />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={logo2} />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={logo3} />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={logo4} />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={logo5} />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={logo6} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="about_testimonials">
        <div className="tesimonials_info">
          <div className="testimonials_subtitle">Work with us</div>
          <div className="testimonials_title">Now Let’s grow Yours</div>
          <div className="testimonials_txt">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </div>
          <Button label="Button" className="testimonial_button" />
        </div>
        <div className="testimonials_img">
          <img src={testimonials_img} />
        </div>
      </div>
    </div>
  );
};

export default About;
