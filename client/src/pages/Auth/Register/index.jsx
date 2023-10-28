import React from "react";
import { fetchAuthRegister } from "../../../store/reducer/auth/authThunk";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";

/* import {login} from "../Login/" */

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
      console.log("saa");
      navigation(routes.LOGIN);
    }
  };

  const handleChangeValue = (e) => {
    setRegDatas((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        type="text"
        placeholder="name"
        value={regDatas.name}
        onChange={handleChangeValue}
      />
      <input
        name="email"
        type="text"
        placeholder="email"
        value={regDatas.email}
        onChange={handleChangeValue}
      />
      <input
        name="password"
        type="password"
        placeholder="pass"
        value={regDatas.password}
        onChange={handleChangeValue}
      />
      <button>Send</button>
    </form>
  );
};

export default Register;
