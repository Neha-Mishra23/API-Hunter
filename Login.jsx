import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    axios
      .post("https://reqres.in/api/login", userData)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/dashboard", { state: { token } });
      })
      .catch((error) => {
        console.error("Login failed", error);
        alert("Invalid credentials!");
      });
  };

  return (
    <div style={{ marginLeft: "500px", paddingBottom: "90px" }}>
      <h3 style={{ marginLeft: "50px" }}>Login Page</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label type="email">Email : </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div
          style={{
            marginLeft: "-2px",
            paddingBottom: "10px",
            marginTop: "10px",
          }}
        >
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            style={{ marginLeft: "50px", paddingBottom: "5px" }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
