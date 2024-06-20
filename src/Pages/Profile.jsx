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

const Profile = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const { slug } = useParams();
  const [age, setAge] = React.useState("");
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="container">
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
                <button
                  className="CustomizeButtonStyle"
                  style={{ backgroundColor: "#194db2", border: "none" }}
                >
                  +
                </button>
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
                <Link to="https://affiliate-program.amazon.com/">
                  <Button
                    variant="contained"
                    style={{ background: "#d7d7d7", color: "black" }}
                  >
                    +
                  </Button>
                </Link>
              </div>
              <div></div>
              <div className="grid-item">
                <Link to="/wishlist">
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
                </Link>
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

export default Profile;
