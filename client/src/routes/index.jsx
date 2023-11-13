import { Route, Routes } from "react-router-dom";
import {
  About,
  BlogDetail,
  Blogs,
  Contact,
  FAQ,
  Home,
  Login,
  Oops,
  Products,
  Register,
  Team,
  ProductDetail
} from "../pages/index";
import PublicLayout from "../layouts/PublicLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";

const Navigation = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="FAQ" element={<FAQ />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="BlogDetail" element={<BlogDetail />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="About" element={<About />} />
        <Route path="Products" element={<Products />} />
        
        <Route path="ProductDetail" element={<ProductDetail />} />
        <Route path="Team" element={<Team />} />
        <Route path="*" element={<Oops />} />
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
