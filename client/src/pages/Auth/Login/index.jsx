import React from "react";
import { useDispatch } from "react-redux";
import { fetchAuthLogin } from "../../../store/reducer/auth/authThunk";
import "./login.scss"
import "../../../assets/fonts/fonts.css"

const Login = () => {
  const dispatch= useDispatch();
  const [logDatas, setLogDatas] = React.useState({
    identifier: "",
    password: "",
  });

  const handleChangeValue = (e) => {
    setLogDatas((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAuthLogin(logDatas));

  };
     
  return (

    <div className="login_container">
           <h3>Login form</h3>
    <form className="login_form" onSubmit={handleSubmit}>
      <input
        name="identifier"
        type="text"
        placeholder="email"
        value={logDatas.identifier}
        onChange={handleChangeValue}
        className="login_username"
      />
      <input
        name="password"
        type="password"
        placeholder="pass"
        value={logDatas.password}
        onChange={handleChangeValue}
        
        className="login_password"
      />
      <button>Sign in</button>
    </form>
    </div>
  );
};

export default Login;
