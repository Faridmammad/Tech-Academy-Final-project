import './App.css'
import "./assets/fonts/fonts.css"
import Navigation from "./routes"
import {useSelector} from "react-redux";

function App() {

 const {token, userDatas} = useSelector((state)=>state.auth);
 console.log(token, userDatas);

  return (
    <>

      <Navigation/>
    </>
  );
}

export default App;
