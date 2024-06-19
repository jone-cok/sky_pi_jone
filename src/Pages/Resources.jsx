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
            <h5 style={{ textAlign: "center", fontSize: "100px" }}>Help me</h5>
            <p
              className="label-start"
              style={{ fontSize: "35px", fontFamily: "cursive" }}
            >
              Log In
            </p>

            <div className="grid-story">
              <Link to="/qrcode">
                <Button
                  variant="contained"
                  className="ButtonStyle"
                  style={{
                    width: "100%",
                    backgroundImage:
                      "linear-gradient(#879DC7 10%, #194DB2 50%, #194DB2 79%)",
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
                    backgroundImage:
                      "linear-gradient(#879DC7 10%, #194DB2 50%, #194DB2 79%)",
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
                    backgroundImage:
                      "linear-gradient(#879DC7 10%, #194DB2 50%, #194DB2 79%)",
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
                    backgroundImage:
                      "linear-gradient(#879DC7 10%, #194DB2 50%, #194DB2 79%)",
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
