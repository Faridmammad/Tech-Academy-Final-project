import "./oops.scss"
import "../../assets/fonts/fonts.css"
import {robotimg} from "../../assets/images/index"

import { arrow_right, chevron_left } from "../../assets/icons/index"


const Oops = () => {
  return (
    <div className="oops_container">

    <h1>404</h1>
    <img className="robotimg" src={robotimg}></img>
    
    <h1>Oops</h1>
    <h4>We can`t seem to find the page you`re looking for</h4>
    <button className="oops_button"><img src={chevron_left}/>Back to Home</button>
    <h3>Are you looking for...</h3>
    <ul>
      <li><a href="/home"><img src={arrow_right} />Home</a></li>
      <li><a href="/blogs"><img src={arrow_right} />Blog</a></li>
      <li><a href="/contact"><img src={arrow_right} />Contact</a></li>
    </ul>
    </div>
  )
}

export default Oops


