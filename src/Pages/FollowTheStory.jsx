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
            <div className="login-style" style={{ height: "75px" }}></div>

            <h5 style={{ textAlign: "center", fontSize: "100px" }}>Help me</h5>
            <p
              className="label-start"
              style={{ fontSize: "35px", fontFamily: "cursive" }}
            >
              Follow the story
            </p>

            <div className="grid-story">
              <Link to="https://www.Skye-pi.org">
                <Button
                  variant="contained"
                  className="ButtonStyleNormal"
                  style={{
                    width: "100%",
                  }}
                >
                  Website
                </Button>
              </Link>
            </div>
            <div className="grid-story">
              <Link to="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fskye_pi_designs%2F%3Figsh%3DMTdodnBvaGkzMDdiOQ%253D%253D%26utm_source%3Dqr&is_from_rle">
                <Button
                  variant="contained"
                  className="ButtonStyleNormal"
                  style={{
                    width: "100%",
                  }}
                >
                  Instagram
                </Button>
              </Link>
            </div>
            <div className="grid-story">
              <Link to="/podcast">
                <Button
                  variant="contained"
                  className="ButtonStyleNormal"
                  style={{
                    width: "100%",
                  }}
                >
                  Podcast
                </Button>
              </Link>
            </div>
            <div className="grid-story">
              <Link to="https://ontheworldmap.com/usa/">
                <Button
                  variant="contained"
                  className="ButtonStyleNormal"
                  style={{
                    width: "100%",
                  }}
                >
                  Road Map
                </Button>
              </Link>
            </div>
            <div className="grid-story">
              <Link to="https://play.google.com/store/apps/dev?id=5836400188287644701&hl=en_US">
                <Button
                  variant="contained"
                  className="ButtonStyleNormal"
                  style={{
                    width: "100%",
                  }}
                >
                  Apps
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
