import { Link } from "react-router-dom";
import Button from '../Components/Button/Button';
const Home = () => {
  return (
    <div className="container">
      <div className="banner-container">
        <div className="banner">
          <div style={{ padding: "0px 0px 0px 80%" }}>
            <Link to="/products">
              <div
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontFamily: "Cursive",
                }}
              >
                <div style={{ color: "blue" }}>SignUp/</div>
                <div style={{ color: "red" }}>Login</div>
              </div>
            </Link>
          </div>
          <div className="bannerhome">
			<h5 style={{textAlign:"center"}}>Help me</h5>
            <div className="bannerimageprofile" >
            </div>
			<div style={{
				  marginTop: "20px",
                  textAlign: "left",
                  fontSize: "40px",
                  fontFamily: "serif",
                }}>
				Name
			</div>
			<input type="text"></input>
			<Button/>
            <h2 style={{ float: "right" }}>
              It's time for somesdgfhwrgjhrsj Cocktails
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
