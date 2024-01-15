import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/home");
    }
  }, []);
  const login = (e) => {
    e.preventDefault();
    console.log(email, pass);
    try {
      fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, pass }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status === 200) {
            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate("/home");
          } else {
            alert("Invalid Credentials");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form className="center-form">
        <h2>Log In</h2>

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={(event) => {
            setemail(event.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => {
            setpass(event.target.value);
          }}
        />

        <button onClick={login} style={{ cursor: "pointer" }}>
          Log In
        </button>
      </form>

      <div className="login-link">
        <Link to="/">New here ? Register</Link>
        {/* <a href="/">New here ? Register</a> */}
      </div>
    </div>
  );
};

export default Login;
