import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { request } from "graphql-request";
import Button from "@mui/material/Button";
import "../Styles/Button.css";
import "../Styles/TextAreaCustom.css";
import "../Styles/Label.css";

const WishList = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const { slug } = useParams();

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
              Follow the story
            </p>

            <div className="grid-story">
              <Link to="/">
                <Button
                  variant="contained"
                  className="ButtonStyleNormal"
                  style={{
                    width: "100%",
                  }}
                >
                  WishList 1
                </Button>
              </Link>
            </div>
            <div className="grid-story">
              <Link to="/">
                <Button
                  variant="contained"
                  className="ButtonStyleNormal"
                  style={{
                    width: "100%",
                  }}
                >
                  WishList 2
                </Button>
              </Link>
            </div>
            <div className="grid-story">
              <Link to="/">
                <Button
                  variant="contained"
                  className="ButtonStyleNormal"
                  style={{
                    width: "100%",
                  }}
                >
                  WishList 3
                </Button>
              </Link>
            </div>
            <div className="grid-story">
              <Link to="/">
                <Button
                  variant="contained"
                  className="ButtonStyleNormal"
                  style={{
                    width: "100%",
                  }}
                >
                  WishList 4
                </Button>
              </Link>
            </div>
            <div className="grid-story">
              <Link to="/">
                <Button
                  variant="contained"
                  className="ButtonStyleNormal"
                  style={{
                    width: "100%",
                  }}
                >
                  WishList 5
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
