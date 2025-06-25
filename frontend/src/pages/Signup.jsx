import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [data, setData] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    try {
      if (!email || !password) {
        setData("Please enter all the fields");
      }
      const isValidEmail =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      if (!isValidEmail) {
        setData("please enter the valid Email...");
        return;
      }
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data.msg);
      if (
        response.data.msg ==
        "Congratulations! Your account has been successfully created."
      ) {
        setData(response.data.msg);
        const loginResponse = await axios.post(
          "http://localhost:3000/api/v1/auth/login",
          {
            email: email,
            password: password,
          }
        );
        const token = loginResponse.data.token;
        console.log(token);
        localStorage.setItem("token", token);
        navigate("/dashboard", { replace: true });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setData("Please  try again later.....");
    }
  };
  return (
    <div>
      Welcome to Summary.AI
      <form onSubmit={onSubmitHandler}>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit">Signup</button>
        {data ? data : <></>}
      </form>
    </div>
  );
};

export default Signup;
