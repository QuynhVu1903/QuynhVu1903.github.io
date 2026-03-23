import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import { MapPin, Clock, ChevronDown, Search, Ship } from "lucide-react";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="pic1">
        <div className="headerPic1">
          <div className="listLeft">
            <div className="listLeft1">
              <div className="listLeft1-icon">
                <MapPin size={15} />
              </div>
              <div className="listLeft1-text">
                72 Hang Trong St., Hoan Kiem Dist., Hanoi, Vietnam 2000
              </div>
            </div>
            <div className="listLeft2">
              <div className="liftLeft2Icon">
                <Clock size={15} color="#0D0D0C" />
              </div>
              <div className="liftLeft2Text">Hotline: +84-946 505 505</div>
            </div>
          </div>
          <div className="listRight">
            <div className="borderButton">
              <div>Language</div>
              <div className="buttonDown">
                <ChevronDown size={15} color="#0D0D0C" />
              </div>
            </div>
            <div className="frame305">
              <div className="frame3051">FAQ</div>
              <div className="frame3052">Support</div>
              <div>Sign in/ Register</div>
            </div>
          </div>
        </div>
        <div className="backgroundPic1">
          <div className="backgroundPic1Logo">
            <img src="/logo.png" />
          </div>
          <div className="backgroundPic1-nav">
            <a className="firstA" href="#">
              Home
            </a>
            <a href="#">Halong Bay Cruise Packages</a>
            <a href="#">Cat Ba - Lan Ha Cruise Packages</a>
            <a href="#">Why us</a>
          </div>
          <div className="backgroundPic1-link">
            <a href="#">Book A Tour</a>
          </div>
        </div>
        <div className="contentPic1">
          <div className="frame337">
            <div className="frame322">
              <div className="frame322-up">
                Unforgettable Halong Bay Cruises
              </div>
              <div className="frame322-down">
                with Asia Pacific Travel - Since 2002
              </div>
            </div>
            <div className="frame11">
              <div className="frame610">
                {/* gồm search và cruise */}
                <div className="frame6">
                  <div className="frame6-icon">
                    <Search />
                  </div>
                  <div className="frame6-text">Search destinations, hotels</div>
                </div>
                <div className="frame10">
                  <div className="frame10-icon">
                    <Ship />
                  </div>
                  <div className="frame10-text">Cruise category</div>
                </div>
              </div>
              <div className="coolection-button">
                <div>Search</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content 2, gồm 3 ảnh */}
      <div className="rectangle">
        {/*  ::before tạo lớp gradient mờ bên trong  */}
        <div className="pic2">
        <div className="title-pic2">
          <h2>Choose Your Perfect Halong Bay Experience</h2>
          <p>With over 20 years of expertise, Asia Pacific Travel has been crafting memorable journeys for travelers worldwide. Our experienced tour guides and dedicated advisor team ensure every detail of your adventure is seamless and unforgettable.</p>
        </div>

        <div className="cards-container">
          <div className="card1Pic2">
            <div>Why Cruise with Us</div>
            </div>
          <div className="card2Pic2">
            <div>Full & Half Package Tours</div>
            </div>
          <div className="card3Pic2">
            <div>Think To Do</div>
            </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
