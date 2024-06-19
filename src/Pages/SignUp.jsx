import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { request } from "graphql-request";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import "../Styles/Button.css";
import "../Styles/TextAreaCustom.css";
import "../Styles/Label.css";

const SignUp = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const { slug } = useParams();
  const [age, setAge] = React.useState("");
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

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
            <div style={{ padding: "0 0 4% 60%" }}>
              <Link to="/resources">
                <div className="login-style">
                  <div style={{ color: "black", fontSize: "30px" }}>
                    Resources
                  </div>
                  <div style={{ height: "18px" }}></div>
                </div>
              </Link>
            </div>
            <h5 style={{ textAlign: "center", fontSize: "100px" }}>Help me</h5>
            <div className="avatar-container" style={{ position: "relative" }}>
              <div>
                <button className="CustomizeButtonStyle">+</button>
                <input
                  type="file"
                  onChange={handleChange}
                  style={{
                    opacity: "0",
                    position: "absolute",
                    top: "-28px",
                    right: "-18px",
                    width: "50px",
                    height: "50px",
                  }}
                />
                <img
                  src={file}
                  style={{
                    height: "300px",
                    maxWidth: "350px",
                    minWidth: "260px",
                    width: "100%",
                  }}
                  accept="image/*"
                />
              </div>
            </div>

            <input
              type="email"
              className="TextAreaCustom"
              style={{ height: "50px", marginTop: "20px" }}
              placeholder="Full name"
            ></input>
            <input
              type="password"
              className="TextAreaCustom"
              style={{ height: "50px", marginTop: "20px" }}
              placeholder="Type cash tag"
            ></input>

            <textarea
              className="TextAreaCustom"
              style={{
                minHeight: "120px",
                maxHeight: "120px",
                minWidth: "100%",
                maxWidth: "100%",
              }}
              placeholder="Write Your Story Here..."
            ></textarea>

            <div className="grid-story-signup">
              <Link to="/qrcode">
                <Button
                  variant="contained"
                  className="ButtonStyle"
                  style={{
                    width: "100%",
                    color: "black",
                    fontSize: "12px",
                    background: "#d7d7d7",
                  }}
                >
                  Pick what phrase most identifies with you
                </Button>
              </Link>
            </div>
            <div className="grid-container-signup">
              <div className="grid-item">
                <Button
                  variant="contained"
                  style={{ background: "#d7d7d7", color: "black" }}
                >
                  +
                </Button>
              </div>
              <div></div>
              <div className="grid-item">
                <Button
                  variant="contained"
                  style={{
                    width: "100%",
                    background: " #d7d7d7",
                    color: "black",
                  }}
                >
                  pick your wish list items
                </Button>
              </div>
            </div>
            <div className="grid-story-signup">
              <Button
                variant="contained"
                className="ButtonStyle"
                style={{
                  width: "100%",
                  backgroundImage:
                    "linear-gradient(#EBEBEB 0%, #990404 50%, red 90%)",
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
