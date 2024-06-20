import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { request } from "graphql-request";

import Button from "@mui/material/Button";
import "../Styles/Button.css";
import "../Styles/TextAreaCustom.css";
import "../Styles/Label.css";
import skypi from "../assets/skypi.jpg";
const LoginSignup = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const { slug } = useParams();
  // const urlll= URL.createObjectURL("../assets/skypi.jpg")
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
    <div className="container">
      <div className="banner-container">
        <div className="banner">
          <div className="first-container">
            <div>
              <div className="login-style" style={{ height: "75px" }}></div>
            </div>
            <h5 style={{ textAlign: "center", fontSize: "100px" }}>Help me</h5>
            <div className="avatar-container">
              <img
                src={skypi}
                alt="skyppi"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className="grid-story">
              <Link to="/signup">
                <Button
                  variant="contained"
                  className="ButtonStyle"
                  style={{
                    width: "100%",
                    backgroundImage:
                      "linear-gradient(#879DC7 10%, #194DB2 50%, #194DB2 79%)",
                    marginTop: "10px",
                  }}
                >
                  Sign Up
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
                    backgroundImage:
                      "linear-gradient(#EBEBEB 0%, #990404 50%, red 90%)",
                  }}
                >
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
