import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { request } from "graphql-request";
import Button from "@mui/material/Button";
import "../Styles/Button.css";
import "../Styles/TextAreaCustom.css";
import "../Styles/Label.css";

const Login = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const { slug } = useParams();

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

      setProduct(cocktail);
    };

    fetchProduct();
  }, [slug]);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="banner-container">
        <div className="banner">
          <div className="first-container">
            <div style={{ padding: "0 60% 4%  0", float: "left" }}>
              <div className="login-style">
                <button
                  onClick={() => navigate(-1)}
                  style={{
                    color: "black",
                    fontSize: "30px",
                    border: "none",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  Back
                </button>

                <div style={{ height: "18px" }}></div>
              </div>
            </div>
            <h5 style={{ textAlign: "center", fontSize: "100px" }}>Help me</h5>
            <p
              className="label-start"
              style={{ fontSize: "35px", fontFamily: "cursive" }}
            >
              Resources
            </p>
            <div className="grid-story">
              <Link to="/qrcode">
                <Button
                  variant="contained"
                  className="ButtonStyle"
                  style={{
                    width: "100%",
                    background: "#d7d7d7",
                    color: "black",
                  }}
                >
                  QR Codes
                </Button>
              </Link>
            </div>
            <div className="grid-story">
              <Link to="/">
                <Button
                  variant="contained"
                  className="ButtonStyle"
                  style={{
                    width: "100%",
                    background: "#d7d7d7",
                    color: "black",
                  }}
                >
                  Public View
                </Button>
              </Link>
            </div>
            <div className="grid-story">
              <Link to="/login">
                <Button
                  variant="contained"
                  className="ButtonStyle"
                  style={{
                    width: "100%",
                    background: "#d7d7d7",
                    color: "black",
                  }}
                >
                  Change Password
                </Button>
              </Link>
            </div>
            <div className="grid-story">
              <Link to="/findshelter">
                <Button
                  variant="contained"
                  className="ButtonStyle"
                  style={{
                    width: "100%",
                    background: "#d7d7d7",
                    color: "black",
                  }}
                >
                  Find a Shelter
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
