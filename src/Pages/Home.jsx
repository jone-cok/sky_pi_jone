import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "../Styles/Button.css";
import "../Styles/TextAreaCustom.css";
import "../Styles/Label.css";

const Home = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="banner-container">
        <div className="banner">
          <div style={{ padding: "0 0 1% 60%" }}>
            <Link to="/loginsignup">
              <div className="login-style">
                <div style={{ color: "blue" }}>SignUp/</div>
                <div style={{ color: "red" }}>Login</div>
              </div>
            </Link>
          </div>
          <div className="first-container">
            <h5 style={{ textAlign: "center", fontSize: "100px" }}>Help me</h5>
            <div className="avatar-container"></div>

            <div className="label">Name</div>

            <textarea
              className="TextAreaCustom"
              style={{
                minHeight: "120px",
                maxHeight: "120px",
                minWidth: "100%",
                maxWidth: "100%",
              }}
              placeholder="Your Story Here..."
            ></textarea>

            <div className="grid-container">
              <div className="grid-item">
                <Button
                  variant="contained"
                  className="ButtonStyle"
                  style={{
                    backgroundImage:
                      "linear-gradient(#EBEBEB 0%, #990404 50%, red 90%)",
                  }}
                >
                  Donate
                </Button>
              </div>
              <div></div>
              <div className="grid-item">
                <Button
                  variant="contained"
                  className="ButtonStyle"
                  style={{
                    backgroundImage:
                      "linear-gradient(#615F5F 10%, #615F5F 50%, #2b2a2a 90%)",
                  }}
                >
                  Contained
                </Button>
              </div>
            </div>
            <div className="grid-story">
              <Link to="/followthestory">
                <Button
                  variant="contained"
                  className="ButtonStyle"
                  style={{
                    width: "100%",
                    backgroundImage:
                      "linear-gradient(#879DC7 10%, #194DB2 50%, #194DB2 79%)",
                  }}
                >
                  Foloow the story.
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

export default Home;
