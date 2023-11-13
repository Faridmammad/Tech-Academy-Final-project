import React from "react";
import { fetchAuthRegister } from "../../../store/reducer/auth/authThunk";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import "./register.scss"
import "../../../assets/fonts/fonts.css"
import Login from "../Login";

const Register = () => {
  const { userDatas } = useSelector((state) => state.auth);
  const navigation = useNavigate();

  const dispatch = useDispatch();
  const [regDatas, setRegDatas] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAuthRegister(regDatas));

    if (userDatas) {
      navigation(Login);
    }
  };

  const handleChangeValue = (e) => {
    setRegDatas((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (

    
    <div className="register_container">

      <h3>Registration form</h3>
    <form className="register_form" onSubmit={handleSubmit}>
      <input
        name="username"
        type="text"
        placeholder="name"
        value={regDatas.name}
        onChange={handleChangeValue}
        
        className="register_username"
      />
      <input
        name="email"
        type="text"
        placeholder="email"
        value={regDatas.email}
        onChange={handleChangeValue}
        
        className="register_email"
      />
      <input
        name="password"
        type="password"
        placeholder="pass"
        value={regDatas.password}
        onChange={handleChangeValue}
        className="register_password"
      />
      <button>Register</button>
    </form>
        </div>
  );
};

export default Register;
