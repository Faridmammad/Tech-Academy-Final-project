import React from "react";
import "./faq.scss";
import "../../assets/fonts/fonts.css";
import Button from "../../components/Button";

const FAQ = () => {
  return (
    <div className="faq_container">
      <div className="faq_title">FAQ</div>
      <h1>Frequently Asked Questions</h1>
      <h6>
        We focus on ergonomics and meeting you where you work. Itss only a
        keystroke away.
      </h6>

      <div className="faq_qa">
        <div className="faq_question">OpenType features and Variable fonts</div>
        <div className="faq_answer">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </div>
      </div>

      <div className="faq_qa">
        <div className="faq_question">Start working faster today</div>
        <div className="faq_answer">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </div>
      </div>

      <div className="faq_qa">
        <div className="faq_question">Work at the speed of thought.</div>
        <div className="faq_answer">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </div>
      </div>

      <div className="faq_qa">
        <div className="faq_question">The Fastest way to organize</div>
        <div className="faq_answer">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </div>
      </div>

      <div className="faq_qa">
        <div className="faq_question">The Fastest way to navigate</div>
        <div className="faq_answer">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </div>
      </div>

      <div className="faq_subs">
        <div className="faq_subs_title">Be the first to know</div>
        <div className="faq_subs_subtitle">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </div>

        <div className="faq_subs_labelbutton">
       
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        className="faq_emaillabel"
      />
          <Button label="Subscribe"
        className="faq_button"/>
        </div>

   
      </div>
    </div>
  );
};

export default FAQ;
