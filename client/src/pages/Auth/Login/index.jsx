import React from "react";
import { useDispatch } from "react-redux";
import { fetchAuthLogin } from "../../../store/reducer/auth/authThunk";

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
    <form onSubmit={handleSubmit}>
      <input
        name="identifier"
        type="text"
        placeholder="email"
        value={logDatas.identifier}
        
        onChange={handleChangeValue}
      />
      <input
        name="password"
        type="password"
        placeholder="pass"
        value={logDatas.password}
        onChange={handleChangeValue}
      />
      <button>Sign in</button>
    </form>
  );
};

export default Login;
