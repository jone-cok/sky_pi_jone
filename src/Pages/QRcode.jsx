import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Qrcode from "react-qr-code";

import Button from "@mui/material/Button";
import "../Styles/Button.css";
import "../Styles/TextAreaCustom.css";
import "../Styles/Label.css";

const Qrcodes = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
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
            <div
              className="label"
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              QR code
            </div>
            <div className="avatar-container">
              <Qrcode
                value={"adsga"}
                style={{ width: "100%", height: "100%" }}
              ></Qrcode>
            </div>

            <div className="label" style={{ textAlign: "center" }}>
              "Im Diabetic"
            </div>

            <div className="grid-story">
              <Button
                variant="contained"
                className="ButtonStyle"
                style={{
                  width: "100%",
                  backgroundColor: "#ebebeb",
                  color: "black",
                }}
              >
                Print
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qrcodes;
