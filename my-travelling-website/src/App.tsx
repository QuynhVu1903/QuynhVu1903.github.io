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

import Cruise from "./components/cruise";

import BackgroundHeader from "./components/components_travelling/backgroundHeader";
import ChooseExperience from "./components/components_travelling/chooseExperience";
import CruisePackages from "./components/components_travelling/cruisePackages";
import AdvisorTeam from "./components/components_travelling/advisorTeam";
import CruiseItineraries from "./components/components_travelling/cruiseItineraries";
import UnfogettableExperiences from "./components/components_travelling/unfogettableExperiences";
import AffordableCruisePackages from "./components/components_travelling/affordableCruisePackages";
import DiscoverNextAdventure from "./components/components_travelling/discoverNextAdventure";
import TravelBlog from "./components/components_travelling/travelBlog";
import SignUp from "./components/components_travelling/signUp";
import Footer from "./components/components_travelling/footer";

function App() {
  // const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <>
      <BackgroundHeader />

      <ChooseExperience />

      <CruisePackages />

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

      <AdvisorTeam />

      <CruiseItineraries />

      <UnfogettableExperiences />

      <AffordableCruisePackages />

      <DiscoverNextAdventure />

      <TravelBlog />

      {/* Pic 11 */}
      <div className="pic11">
        <img className="pic11a" src="public/11a.png" />
        <img className="pic11b" src="public/11b.png" />
        <img className="pic11c" src="public/11c.png" />
        <img className="pic11d" src="public/11d.png" />
        <img className="pic11e" src="public/11e.png" />
      </div>

      <SignUp />

      <Footer />
    </>
  );
}

export default App;
