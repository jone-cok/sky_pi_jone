import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { request } from "graphql-request";
import Button from "@mui/material/Button";
import "../Styles/Button.css";
import "../Styles/TextAreaCustom.css";
import "../Styles/Label.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChange = (e) => {
    fetch("http://localhost:8000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        res.json().then((data) => {
          console.log(data.message);
          if (data.status === 200) {
            navigate("/login"); //====================== ??????====================//
          } else {
            alert(data.message);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="banner-container">
        <div className="banner">
          <div className="first-container">
            <div className="login-style" style={{ height: "75px" }}></div>

            <h5 style={{ textAlign: "center", fontSize: "100px" }}>Help me</h5>
            <p
              className="label-start"
              style={{ fontSize: "35px", fontFamily: "cursive" }}
            >
              SignUp
            </p>
            <p className="label-start">Type email and password!</p>
            <input
              type="email"
              className="TextAreaCustom"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{ height: "50px", marginTop: "20px" }}
            ></input>
            <input
              type="password"
              className="TextAreaCustom"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={{ height: "50px", marginTop: "20px" }}
            ></input>
            <div className="grid-story">
              <Button
                variant="contained"
                className="ButtonStyle"
                onClick={handleChange()}
                style={{
                  width: "100%",
                  backgroundImage:
                    "linear-gradient(#879DC7 10%, #194DB2 50%, #194DB2 79%)",
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
