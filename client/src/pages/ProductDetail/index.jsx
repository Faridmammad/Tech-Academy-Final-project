import "./productdetail.scss"
import {logo1,logo2,logo3,logo4,logo5,logo6} from "../../assets/icons";


const ProductDetail = () => {
  return (
   <>
   
   <div className="about_companies">
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
   
   </>
  )
}

export default ProductDetail
