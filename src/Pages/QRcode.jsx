import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import "../Styles/Button.css";
import "../Styles/TextAreaCustom.css";
import "../Styles/Label.css";

const Qrcode = () => {
  const navigate = useNavigate();
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="banner-container">
        <div className="banner">
          <div className="first-container">
            <button className="btn" onClick={() => navigate(-1)}>
              Back
            </button>
            <h5 style={{ textAlign: "center", fontSize: "100px" }}>Help me</h5>
            <div
              className="label"
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              QR code
            </div>
            <div className="avatar-container"></div>

            <div className="label" style={{ textAlign: "center" }}>
              "Im Diabetic"
            </div>

            <div className="grid-story">
              <Button
                variant="contained"
                className="ButtonStyle"
                style={{
                  width: "100%",
                  background: "antiquewhite",
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

export default Qrcode;
