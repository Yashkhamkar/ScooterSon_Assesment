import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/home");
    }
  }, []);
  const Register = () => {
    if (!name || !email || !pass) {
      alert("Please fill all the fields");
      return;
    }
    try {
      fetch("/api/user/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, pass, isAdmin: false }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status === 201) {
            localStorage.setItem("userInfo", JSON.stringify(data));
            alert("Registration Successfull");
            navigate("/home");
            setname("");
            setemail("");
            setpass("");
          } else {
            alert("User already exists");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form className="center-form">
        <h2>Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={(event) => {
            setname(event.target.value);
          }}
        />
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

        <button onClick={Register} style={{ cursor: "pointer" }}>
          Sign Up
        </button>
      </form>

      <div className="login-link">
        <Link to="/login">I already have an account.</Link>
        {/* <a href="/login">I already have an account.</a> */}
      </div>
    </div>
  );
};

export default Register;
