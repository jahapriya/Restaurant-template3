import "./App.css";
import Orangepic from "./images/restaurant.jpg";
import Pomogranite from "./images/pomograniteplate.jpg";
import Potato from "./images/potatoplate.jpg";
import Chickenplate from "./images/chickenplate.jpg";
import Fullplate from "./images/fullsetplate.jpg";

function App() {
  return (
    <div className="container">
      <div className="menu">
        <div className="header headeralignment">
          <img
            src={Orangepic}
            style={{ width: "100px" }}
            alt="Restaurant Logo"
          ></img>
          <h1 className="rightheader">
            RESTAURANT <br />
            <span class="menu-text">MENU</span>
          </h1>
        </div>
        <div className="section">
          <h2
            className="resdesign"
            style={{
              fontStyle: "italic",
              fontFamily: "cursive",
              color: "#62742a",
              fontSize: "30px",
              paddingLeft: "37px",
            }}
          >
            Breakfast
          </h2>
          <div className="row">
            <div className="imagealign" style={{ display: "flex" }}>
              <div className="col-md-6">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div
                        className="fw-bold"
                        style={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: "#e57837",
                        }}
                      >
                        Lorem ipsum dolor <span className="price">$10.99</span>
                      </div>
                    </div>
                    <div className="ms-2 textsize" style={{ maxWidth: "85%" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div
                        className="fw-bold"
                        style={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: "#e57837",
                        }}
                      >
                        Lorem ipsum dolor <span className="price">$10.99</span>
                      </div>
                    </div>
                    <div className="ms-2 textsize" style={{ maxWidth: "85%" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </div>
                  </li>
                </ul>
              </div>
              <div className="foodimages">
                <img src={Pomogranite} alt="pomo" className="list-image" />
                <img src={Potato} alt="potato" className="list-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2
            className="resdesign"
            style={{
              fontStyle: "italic",
              fontFamily: "cursive",
              color: "#62742a",
              fontSize: "30px",
              paddingLeft: "37px",
            }}
          >
            Bruch
          </h2>
          <div className="row">
            <div className="imagealign" style={{ display: "flex" }}>
              <div className="col-md-6">
                {/* <h3>Starters</h3> */}
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div
                        className="fw-bold"
                        style={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: "#e57837",
                        }}
                      >
                        Lorem ipsum dolor <span className="price">$10.99</span>
                      </div>
                    </div>
                    <div className="ms-2 textsize" style={{ maxWidth: "95%" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div
                        className="fw-bold"
                        style={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: "#e57837",
                        }}
                      >
                        Lorem ipsum dolor <span className="price">$10.99</span>
                      </div>
                    </div>
                    <div className="ms-2 textsize" style={{ maxWidth: "95%" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="foodimages">
                <img
                  src={Chickenplate}
                  alt="pomo"
                  className="list-imagechicken"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2
            className="resdesign"
            style={{
              fontStyle: "italic",
              fontFamily: "cursive",
              color: "#62742a",
              fontSize: "30px",
              paddingLeft: "37px",
            }}
          >
            Lunch
          </h2>
          <div className="row">
            <div className="imagealign" style={{ display: "flex" }}>
              <div className="col-md-6">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div
                        className="fw-bold"
                        style={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: "#e57837",
                        }}
                      >
                        Lorem ipsum dolor <span className="price">$10.99</span>
                      </div>
                    </div>
                    <div className="ms-2 textsize" style={{ maxWidth: "85%" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div
                        className="fw-bold"
                        style={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: "#e57837",
                        }}
                      >
                        Lorem ipsum dolor <span className="price">$10.99</span>
                      </div>
                    </div>
                    <div className="ms-2 textsize" style={{ maxWidth: "85%" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </div>
                  </li>
                </ul>
              </div>
              <div className="foodimages">
                <img src={Fullplate} alt="pomo" className="list-imagechicken" />
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2
            className="resdesign"
            style={{
              fontStyle: "italic",
              fontFamily: "cursive",
              color: "#62742a",
              fontSize: "30px",
              paddingLeft: "37px",
            }}
          >
            Dinner
          </h2>
          <div className="row">
            <div className="col-md-6">
              {/* <h3>Starters</h3> */}
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div
                      className="fw-bold"
                      style={{
                        fontSize: "20px",
                        fontWeight: "bolder",
                        color: "#e57837",
                      }}
                    >
                      Lorem ipsum dolor <span className="price">$10.99</span>
                    </div>
                  </div>
                  <div className="ms-2 textsize" style={{ maxWidth: "50%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div
                      className="fw-bold"
                      style={{
                        fontSize: "20px",
                        fontWeight: "bolder",
                        color: "#e57837",
                      }}
                    >
                      Lorem ipsum dolor <span className="price">$10.99</span>
                    </div>
                  </div>
                  <div className="ms-2 textsize" style={{ maxWidth: "50%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        &nbsp; &nbsp; &nbsp;
        <div className="section">
          <p>www.restaurant.com</p>
        </div>
        <footer class="footer">
          &nbsp;
          <div className="rightfooter">
            <p>
              123 ipsum streat
              <br />
              NewYork,ny 00001
            </p>
            <p></p>
          </div>
          <p>www.breakfatncwhc.com</p>
          <div className="leftfooter">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; callservice
              <br />
              +987-6543-021
            </p>
            <p></p>
          </div>
          &nbsp;
        </footer>
      </div>
    </div>
  );
}

export default App;
