import React from "react";
import UserCard from "../../components/Cards/UserCard";
import "./team.scss";
import "../../assets/fonts/fonts.css";
import Button from "../../components/Button";
import {
  facebook_blue,
  instagram_blue,
  linkedin_blue,
  twitter_blue,
} from "../../assets/icons/index";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
} from "../../assets/images";

const Team = () => {
  return (
    <div className="team_container">
      <div className="team_gallery">
        <div className="team_gallery_title">Innovation tailored for you</div>
        <div className="team_gallery_subtitle">What we do</div>
        <div className="team_gallery_images">
          <div className="team_gallery_images_1">
            <div className="img1">
              <img src={gallery1} />
            </div>
          </div>
          <div className="team_gallery_images_2-3">
            <div className="team_gallery_images_2">
              <div className="img2">
                <img src={gallery2} />
              </div>
              <div className="img3">
                <img src={gallery3} />
              </div>
            </div>
            <div className="team_gallery_images_3">
              <div className="img4">
                <img src={gallery4} />
              </div>
              <div className="img5">
                <img src={gallery5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team_users">
        <div className="team_users_title">
          <h2>Meet Our Team</h2>
        </div>
        <div className="_team_users_cards">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
      <div className="team_trial">
        <div className="team_trial_title">Start your 14 days free trial</div>
        <div className="team_trial_subtitle">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </div>
        <Button label="Try it free now" className="team_button" />

        <div className="team_social">
          <ul>
            <li>
              <a href="./">
                <img src={twitter_blue} />
              </a>
            </li>
            <li>
              <a href="./">
                <img src={facebook_blue} />
              </a>
            </li>
            <li>
              <a href="./">
                <img src={instagram_blue} />
              </a>
            </li>
            <li>
              <a href="./">
                <img src={linkedin_blue} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
