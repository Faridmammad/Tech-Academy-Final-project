import "./usercard.scss"
import "../../../assets/fonts/fonts.css"
import React from 'react'
import { user1 } from "../../../assets/images"
import { facebook_red, instagram_red, twitter_red } from "../../../assets/icons"

const UserCard = () => {
  return (
    <div className="usercard_container">
        <img className="usercard_img" src={user1}></img>
        <div className="usercard_username">Username</div>
        <div className="usercard_profession">Profession</div>
        <div className="usercard_social">
            <ul>
                <li><a href="/"><img src={facebook_red}/></a></li>
                <li><a href="/"><img src={instagram_red}/></a></li>
                <li><a href="/"><img src={twitter_red}/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default UserCard