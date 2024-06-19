import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { request } from "graphql-request";
import Button from "@mui/material/Button";
import "../Styles/Button.css";
import "../Styles/TextAreaCustom.css";
import "../Styles/Label.css";

const Login = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  const checking = () => {
    if (email.length === 0 || password.length === 0 || password2.length === 0) {
      alert("Please fill in all fields and try again.");
      return;
    } else {
    }
  };
  useEffect(() => {
    const fetchProduct = async () => {
      const { cocktail } = await request(
        "https://api-us-east-1.graphcms.com/v2/cl4ji8xe34tjp01yrexjifxnw/master",
        `
			{ 
				cocktail(where: {slug: "${slug}"}) {
					category
					info
					ingredients
					instructions
					image {
						url
					 }
					name
					
				 }
			}
		 `
      );
    };

    fetchProduct();
  }, [slug]);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="banner-container">
        <div className="banner">
          <div className="first-container">
            <div className="login-style" style={{ height: "75px" }}></div>

            <h5 style={{ textAlign: "center", fontSize: "100px" }}>Help me</h5>
            <p
              className="label-start"
              style={{ fontSize: "35px", fontFamily: "cursive" }}
            >
              Log In
            </p>
            <p className="label-start">Creat email and password!</p>
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
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={{ height: "50px", marginTop: "20px" }}
            ></input>
            <input
              type="password"
              className="TextAreaCustom"
              placeholder="Re-enter password"
              value={password2}
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
              style={{ height: "50px", marginTop: "20px" }}
            ></input>
            <div className="grid-story">
              <Link to="/loginsignup">
                <Button
                  variant="contained"
                  className="ButtonStyle"
                  onClick={checking()}
                  style={{
                    width: "100%",
                    backgroundImage:
                      "linear-gradient(#879DC7 10%, #194DB2 50%, #194DB2 79%)",
                  }}
                >
                  Continue
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
