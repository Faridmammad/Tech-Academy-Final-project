import './App.css'
import './fonts.css'
import { Routes, Route } from 'react-router-dom';
import {Header, Footer} from "./components"
import { Home, Oops, FAQ, Blogs, Contact, About, Products} from "./pages"

function App() {
  return (

    <>
    Salam
    
      <Header />
      <Routes>

      <Route path="/" element={ <Home/> } />
      <Route path="FAQ" element={ <FAQ/> } />
        <Route path="Blogs" element={ <Blogs/> } />
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