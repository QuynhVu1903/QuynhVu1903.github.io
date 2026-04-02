import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

import {
  MapPin,
  Clock,
  ChevronDown,
  Search,
  Ship,
  ArrowRight,
  Heart,
  Star,
  Diamond,
  Send,
  Mail,
  PhoneCall,
} from "lucide-react";
import Carousel, { slides } from "./components/swiper/swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ItemBlog from "./components/ItemBlog";
import { cruisePackages } from "./shared/mocks";
import { testimonials } from "./shared/test";
import ItemTest from "./components/ItemTest";
import { frame56 } from "./shared/frame56";
import ItemFrame56 from "./components/frame56";
import { blog } from "./shared/blog";
import Pic1 from "./components/pic_number/pic1";
import Pic2 from "./components/pic_number/pic2";
import Cruise from "./components/cruise";
import Pic3 from "./components/pic_number/pic3";
import Pic5 from "./components/pic_number/pic5";
import Pic6 from "./components/pic_number/pic6";
import Pic7 from "./components/pic_number/pic7";
import Pic8 from "./components/pic_number/pic8";
import Pic9 from "./components/pic_number/pic9";
import Pic10 from "./components/pic_number/pic10";
import Pic12 from "./components/pic_number/pic12";

function App() {
  // const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <>
      <Pic1 />

      {/* Pic2 2, gồm 3 ảnh */}

      <Pic2 />

      {/* Pic 3 */}
      <Pic3/>

      {/* Pic 4 */}
      <div className="pic4background">
        <div className="frame298"> 
          <div className="vietnam298">Vietnam Adventure Travel</div>
          <div className="heading298">
            Discover the Magic of Halong Bay and Beyond
          </div>
          <div className="titov298">
            <ul>
              <li>Titov Island: A scenic spot with panoramic views.</li>
              <li>
                Sung Sot Cave: Explore the mesmerizing stalactites and
                stalagmites.
              </li>
              <li>Luon Cave: Experience kayaking or bamboo boat rides.</li>
              <li>Bai Tu Long Bay: A tranquil alternative to Halong Bay.</li>
            </ul>
          </div>
        </div>
        <div className="frame326">
          {/* <Carousel /> */}
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            loop
            // style={{ width: 200, height: 400 }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {slides.map((image, i) => {
              return (
                <SwiperSlide style={{ width: "100%" }}>
                  <img
                    src={image}
                    alt={"pic-" + i}
                    style={{ width: "100%", height: 300, objectFit: "cover" }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Pic 5 */}

      <Pic5 />

      {/* Pic6 */}
      
      <Pic6 />

      {/* Pic 7*/}
      
      <Pic7 />

      {/* Pic 8 */}
      
      <Pic8 />

      {/* Pic 9 */}
      
      <Pic9 />

      {/* pic 10 */}

      <Pic10 />

      {/* Pic 11 */}
      <div className="pic11">
        <img className="pic11a" src="public/11a.png" />
        <img className="pic11b" src="public/11b.png" />
        <img className="pic11c" src="public/11c.png" />
        <img className="pic11d" src="public/11d.png" />
        <img className="pic11e" src="public/11e.png" />
      </div>

      {/* Pic 12 */}

        <Pic12 />

      {/* Footer */}
      <div className="container-cards">
        <div className="container-rights">
          <div className="rights-cards">
            <p>2025 Blue Dragon Tours, All Rights Reserved.</p>
            <p>International Tour Operator Licence No: 001-500/TCDL</p>
            <p>PATA Member Number: 7375</p>
          </div>
          <div className="payment-cards">
            <div className="accept">We Accept</div>
            <div className="cards-method">
              <img src="public/methods.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
