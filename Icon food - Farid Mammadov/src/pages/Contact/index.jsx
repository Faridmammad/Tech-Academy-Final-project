// eslint-disable-next-line no-unused-vars
import React from "react";
import {facebook_blue, twitter_blue, linkedin_blue, instagram_blue, pin, phone, email, arrow_curved} from "../../assets/icons/index"
import {small_donut} from "../../assets/images/index"
import "./contact.scss"
import "../../fonts.css"


const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_details">
        <h3>CONTACT US</h3>
        <h4>Get in touch today</h4>
        <h6>
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </h6>
        <h5>Phone ; +451 215 215 </h5>
        <h5>Fax : +451 215 215</h5>
        <div className="contact_sm">
          <ul>
            <li><a href="/"><img src={facebook_blue}/></a></li>
            <li><a href="/"><img src={instagram_blue}/></a></li>
            <li><a href="/"><img src={twitter_blue}/></a></li>
            <li><a href="/"><img src={linkedin_blue}/></a></li>
          </ul>
        </div>
      </div>

      <div className="contact_img">
        <img src={small_donut}/>
      </div>

// !!

{/* VISIT OUR OFFICE
We help small businesses 
with big ideas */}
//!!
<div className="container_cards">
  <div className="card1">
    <img src={phone}/>
    <p>georgia.young@example.com</p>
    <p>georgia.young@ple.com</p>
    <h5>Get Support</h5>
    <button>Submit request</button>
  </div>
  <div className="card2">
    <img src={pin}/>
    <p>georgia.young@example.com</p>
    <p>georgia.young@ple.com</p>
    <h5>Get Support</h5>
    <button>Submit request</button>
  </div>
  <div className="card3">
    <img src={email}/>
    <p>georgia.young@example.com</p>
    <p>georgia.young@ple.com</p>
    <h5>Get Support</h5>
    <button>Submit request</button>
  </div>
</div>

<div className="contact_tryfree">
<img src={arrow_curved}/>
<h5 className="contact_tryfree_text"> WE Can`t WAIT TO MEET YOU</h5>
<h1>Let`s Talk</h1>
<button>Try it free now</button>
</div>





    </div>
  );
};

export default Contact;
