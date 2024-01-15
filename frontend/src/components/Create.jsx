import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setname] = useState();
  const [price, setprice] = useState();
  const [description, setdescription] = useState();
  const navigate = useNavigate();
  const Register = () => {
    const userInfo = localStorage.getItem("userInfo");
    if (!name || !price || !description) {
      alert("Please fill all the fields");
      return;
    }
    try {
      fetch("/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(userInfo).token}`,
        },
        body: JSON.stringify({ name, price, description }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status === 201) {
            localStorage.setItem("userInfo", JSON.stringify(data));
            alert("Product Created Successfull");
            navigate("/home");
          } else {
            alert("Admin access only");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form className="center-form">
        <h2>Create Product</h2>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={(event) => {
            setname(event.target.value);
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Price"
          onChange={(event) => {
            setprice(event.target.value);
          }}
        />
        <input
          name="password"
          placeholder="description"
          onChange={(event) => {
            setdescription(event.target.value);
          }}
        />

        <button onClick={Register} style={{ cursor: "pointer" }}>
          create
        </button>
      </form>
    </div>
  );
};

export default Create;
