import React from 'react'
import "./blogdetail.scss";
import "../../assets/fonts/fonts.css";
import BlogSubs from "../../components/BlogSubs";
import { waffle, annimg } from "../../assets/images/";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../../store/reducer/blogs/blogThunk";
import BlogCard from '../../components/Cards/BlogCard'

const BlogDetail = () => {


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
        {status === "success" &&
  data.slice(0, 2).map(({ id, attributes }) => (
    <BlogCard className="blog_blogcard"
            key={id}
            image={attributes.images?.data[0].attributes.url}
            tag=/* {attributes.tags?.data[0].attributes.title} */ "Vegan"
            title={attributes.title}
            description={attributes.description}
            date="10-11-2022"
    />
  ))}
        </div>

      </div>
      <BlogSubs />
    </div>
  );
};

export default BlogDetail;
