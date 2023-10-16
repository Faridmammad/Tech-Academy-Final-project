import React from "react";
import "./blogdetail.scss";
import "../../assets/fonts/fonts.css";
import BlogSubs from "../../components/BlogSubs";
import { waffle, annimg } from "../../assets/images/";
import Blogcard from "../../components/Cards/BlogCard";

const BlogDetail = () => {
  return (
    <div className="blogdetail_container">
      <div className="blogdetail_heading">
        <div className="blogdetail_heading_title">Why is Figma crashing?</div>
        <div className="blogdetail_heading_subtitle">
          We know how large objects will act, but things on a small scale.
        </div>
      </div>

      <div className="blogdetail_post">
        <img src={waffle} /> {/* Delicious waffle */}
        <h3>1 - Temper ENIM consequent </h3>
        <h4>
          Temper ENIM consequent excitation dolor et else desert labor painter
          excitation venial consequent ex temper. Null labors Lore acute labor
          Nisei labrum do sent. Labrum elite quiet sent Lore quit. Eu occaecat
          EU liquid sent Fiat door magma official. ET minim excitation painter
          dolor Dolores. Dolor ad else acute dolor nostrum quit also met Mollie
          Fiat elite official. Cilium ENIM dolor labor venial labor in desert
          sit venial inure ex official.
        </h4>
        <h4>
          ENIM null voltage liquid door et ConnectEDU cilium est. Cuppa nostrum
          Nisei sent voltage ID. Else ConnectEDU sit UT reprehended desert
          labrum minim null et.Duis consequent met labors non acute elite ad
          cilium dolor inure ex ENIM excitation. Painter labors occaecat elite
          ex liquid quit Nisei official minim labor liquid official sit UT. Ali
          quip Nisei commodo door met cupidity UT magma venial magma door
          adipisicing painter.
        </h4>
        <h3>2 - Temper ENIM consequent </h3>
        <h4>
          Temper ENIM consequent excitation dolor et else desert labor painter
          excitation venial consequent ex temper. Null labors Lore acute labor
          Nisei labrum do sent. Labrum elite quiet sent Lore quit. Eu occaecat
          EU liquid sent Fiat door magma official. ET minim excitation painter
          dolor Dolores. Dolor ad else acute dolor nostrum quit also met Mollie
          Fiat elite official. Cilium ENIM dolor labor venial labor in desert
          sit venial inure ex official. 
        </h4>
        <h4>
        ENIM null voltage liquid door et
          ConnectEDU cilium est. Cuppa nostrum Nisei sent voltage ID. Else
          ConnectEDU sit UT reprehended desert labrum minim null et.Duis
          consequent met labors non acute elite ad cilium dolor inure ex ENIM
          excitation. Painter labors occaecat elite ex liquid quit Nisei
          official minim labor liquid official sit UT. Ali quip Nisei commodo
          door met cupidity UT magma venial magma door adipisicing painter.
        </h4>
      </div>

      <div className="blogdeteail_author">
        <img src={annimg} />
        <div className="blogdetail_author_details">
          <div className="blogdetail_author_name">Ann</div>
          <div className="blogdetail_author_txt">
            We focus on ergonomics and meeting you where you work. Its only a
            keystroke away.We focus on ergonomics and meeting you where you
            work. Its only a keystroke away.
          </div>
        </div>
      </div>

      <div className="blogdetail_featured">
        <h2>Featured Posts</h2>
        <div className="blogdetail_blogcards">
          
        <Blogcard /> <Blogcard /> <Blogcard />
        </div>

      </div>
      <BlogSubs />
    </div>
  );
};

export default BlogDetail;
