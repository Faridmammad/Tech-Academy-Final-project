import './App.css'
import "./assets/fonts/fonts.css"
import { Routes, Route } from 'react-router-dom';
import {Header, Footer} from "./components"
import { Home, Oops, FAQ, Blogs, BlogDetail, Contact, About, Products} from "./pages"

function App() {
  return (

    <>
    
      <Header />
      <Routes>

      <Route path="/" element={ <Home/> } />
      <Route path="FAQ" element={ <FAQ/> } />
        <Route path="Blogs" element={ <Blogs/> } />
        <Route path="BlogDetail" element={ <BlogDetail/> } />
        <Route path="Contact" element={ <Contact/> } /> 
        <Route path="About" element={ <About/> } />
        <Route path="Products" element={ <Products/> } />
        <Route path="*" element={ <Oops/> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
