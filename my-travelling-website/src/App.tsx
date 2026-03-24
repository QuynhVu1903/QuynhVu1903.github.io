import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import {
  MapPin,
  Clock,
  ChevronDown,
  Search,
  Ship,
  ArrowRight,
  Heart,
} from "lucide-react";
const cruisePackages = [
  {
    image: "public/laiva1.png",
    title: "Best of Luxury: Oriental Jade Hotel + Stellar of the Seas Cruise",
    subtitle:
      "Get the best trip Hanoi - Lan Ha Bay with The Oriental Jade Hotel and Stellar of the Seas to indulge in the ancient vibe of Hanoi capital and the magnificent landscape of the heritage bay!",
    costPer: 250,
  },
  {
    image: "public/metsa2.jpg",
    title: "Luxury Duo: Sofitel Legend Metropole + Paradise Elegance Cruise",
    subtitle:
      "Get the best trip Hanoi - Lan Ha Bay with The Oriental Jade Hotel and Stellar of the Seas to indulge in the ancient vibe of Hanoi capital and the magnificent landscape of the heritage bay!",
    costPer: 770,
  },
  {
    image: "public/laiva3.jpg",
    title: "Luxury Duo: Sofitel Legend Metropole + Paradise Elegance Cruise",
    subtitle:
      "Get the best trip Hanoi - Lan Ha Bay with The Oriental Jade Hotel and Stellar of the Seas to indulge in the ancient vibe of Hanoi capital and the magnificent landscape of the heritage bay!",
    costPer: 770,
  },
  {
    image: "public/cave4.jpg",
    title: "Cultural Escape: Hanoi Boutique Hotel + Dragon Legend Cruise",
    subtitle:
      "Get the best trip Hanoi - Lan Ha Bay with The Oriental Jade Hotel and Stellar of the Seas to indulge in the ancient vibe of Hanoi capital and the magnificent landscape of the heritage bay!",
    costPer: 320,
  },
  {
    image: "public/sea5.jpg",
    title: "Luxury Duo: Sofitel Legend Metropole + Paradise Elegance Cruise",
    subtitle:
      "Get the best trip Hanoi - Lan Ha Bay with The Oriental Jade Hotel and Stellar of the Seas to indulge in the ancient vibe of Hanoi capital and the magnificent landscape of the heritage bay!",
    costPer: 770,
  },
  {
    image: "public/sea6.jpg",
    title: "Luxury Duo: Sofitel Legend Metropole + Paradise Elegance Cruise",
    subtitle:
      "Get the best trip Hanoi - Lan Ha Bay with The Oriental Jade Hotel and Stellar of the Seas to indulge in the ancient vibe of Hanoi capital and the magnificent landscape of the heritage bay!",
    costPer: 770,
  },
  {
    image: "public/laiva7.jpg",
    title: "Adventure Package: O'Gallery Premier Hotel + Azalea Cruise",
    subtitle:
      "Experience the thrill of adventure with a stay at O'Gallery Premier Hotel, followed by an exciting journey on the Azalea Cruise, offering breathtaking views and activities in Halong Bay!",
    costPer: 450,
  },
  {
    image: "public/sea5.jpg",
    title: "Luxury Duo: Sofitel Legend Metropole + Paradise Elegance Cruise",
    subtitle:
      "Get the best trip Hanoi - Lan Ha Bay with The Oriental Jade Hotel and Stellar of the Seas to indulge in the ancient vibe of Hanoi capital and the magnificent landscape of the heritage bay!",
    costPer: 770,
  },
  {
    image: "public/sea6.jpg",
    title: "Luxury Duo: Sofitel Legend Metropole + Paradise Elegance Cruise",
    subtitle:
      "Get the best trip Hanoi - Lan Ha Bay with The Oriental Jade Hotel and Stellar of the Seas to indulge in the ancient vibe of Hanoi capital and the magnificent landscape of the heritage bay!",
    costPer: 770,
  },
];

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
            <div className="titleH2">
              Choose Your Perfect Halong Bay Experience
            </div>
            <div className="titleP">
              With over 20 years of expertise, Asia Pacific Travel has been
              crafting memorable journeys for travelers worldwide. Our
              experienced tour guides and dedicated advisor team ensure every
              detail of your adventure is seamless and unforgettable.
            </div>
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

      {/* Pic 3 */}
      <div className="pic3-background">
        <div className="pic3">
          <div className="pic3Title">
            <div className="tour">Cruise Packages</div>
            <div className="filter">
              <div className="viewAll">View All</div>
              <div className="arrowRight">
                <ArrowRight />
              </div>
            </div>
          </div>

          <div className="pic3Frame327">
            {cruisePackages.map((item, index) => {
              return (
                <div className="card327">
                  <div className="img327">
                    <img src={item.image} />
                  </div>
                  <div className="container327">
                    <div className="frame6320">
                      <div className="description327">
                        <div className="desH3">{item.title}</div>
                        <div className="desP">{item.subtitle}</div>
                      </div>
                      <div className="frame6328">
                        <div className="price327">
                          <div className="priceP">Starting from</div>
                          <div className="priceCost">${item.costPer}.00</div>
                          <div className="priceP">/person</div>
                        </div>
                        <div className="CTA">
                          <div className="iconHeart">
                            <Heart size={16}/>
                          </div>
                          <div className="buttonViewDatail">
                            <a href="#">View Detais</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* het card */}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
