import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { request } from "graphql-request";

import Button from "@mui/material/Button";
import "../Styles/Button.css";
import "../Styles/TextAreaCustom.css";
import "../Styles/Label.css";

const LoginSignup = () => {
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
            <h5 style={{ textAlign: "center", fontSize: "100px" }}>Help me</h5>
            <div className="avatar-container"></div>

            <div className="grid-story">
              <Link to="/signup">
                <Button
                  variant="contained"
                  className="ButtonStyle"
                  style={{
                    width: "100%",
                    backgroundImage:
                      "linear-gradient(#879DC7 10%, #194DB2 50%, #194DB2 79%)",
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
            <p className="label-start">Please bookmark this page!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
