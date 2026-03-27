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
  Star,
  Diamond,
} from "lucide-react";
import Carousel, { slides } from "./components/swiper/swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

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

const testimonials = [
  {
    image: "public/avt1.png",
    name: "Jane Smith",
    job: "Business owner",
    content:
      "“We wanted a quick getaway, and the Cat Ba tour was perfect. In just a few days, we experienced breathtaking views and thrilling adventures. The team was professional and made everything easy for us.”",
  },
  {
    image: "public/avt2.png",
    name: "Jane Smith",
    job: "Business owner",
    content:
      "“What stood out to us was the attention to detail in the itinerary. Each stop was well-planned, allowing us to explore the beauty of Cat Ba without feeling rushed. The documentation provided was also very helpful.”",
  },
  {
    image: "public/avt3.png",
    name: "Jane Smith",
    job: "Business owner",
    content:
      "“We wanted a quick getaway, and the Cat Ba tour was perfect. In just a few days, we experienced breathtaking views and thrilling adventures. The team was professional and made everything easy for us.”",
  },
  {
    image: "public/avt4.png",
    name: "Jane Smith",
    job: "Business owner",
    content:
      "“We wanted a quick getaway, and the Cat Ba tour was perfect. In just a few days, we experienced breathtaking views and thrilling adventures. The team was professional and made everything easy for us.”",
  },
  {
    image: "public/avt5.png",
    name: "Jane Smith",
    job: "Business owner",
    content:
      "“We wanted a quick getaway, and the Cat Ba tour was perfect. In just a few days, we experienced breathtaking views and thrilling adventures. The team was professional and made everything easy for us.”",
  },
  {
    image: "public/avt6.png",
    name: "Jane Smith",
    job: "Business owner",
    content:
      "“We wanted a quick getaway, and the Cat Ba tour was perfect. In just a few days, we experienced breathtaking views and thrilling adventures. The team was professional and made everything easy for us.”",
  },
];

const frame56 = [
  {
    image: "public/frame56.jpg",
    title: "Heritage Tour Binh Chuan",
    subtitle1: "Routing: Ha Noi - Ha Long - Ha Noi",
    subtitle2: "Tour Style: Nature, Culture & History Tour",
    subtitle3: "Tour Start: In Ha Noi / Tour End: In Ha Noi",
    subtitle4: "Trip Duratuion: 2Days 1Night",
    costPer: "$50",
    strength: "/2Days 1Night",
  },
  {
    image: "public/frame56.jpg",
    title: "Heritage Tour Binh Chuan",
    subtitle1: "Routing: Ha Noi - Ha Long - Ha Noi",
    subtitle2: "Tour Style: Nature, Culture & History Tour",
    subtitle3: "Tour Start: In Ha Noi / Tour End: In Ha Noi",
    subtitle4: "Trip Duratuion: 2Days 1Night",
    costPer: "$50",
    strength: "/2Days 1Night",
  },
  {
    image: "public/frame56.jpg",
    title: "Heritage Tour Binh Chuan",
    subtitle1: "Routing: Ha Noi - Ha Long - Ha Noi",
    subtitle2: "Tour Style: Nature, Culture & History Tour",
    subtitle3: "Tour Start: In Ha Noi / Tour End: In Ha Noi",
    subtitle4: "Trip Duratuion: 2Days 1Night",
    costPer: "$50",
    strength: "/2Days 1Night",
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
                            <Heart size={16} />
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

      <div className="pic5">
        <div className="frame289">
          <div className="frame290">
            <div className="tour290">
              Our advisor team is ready to help you plan your dream trip to
              Halong Bay
            </div>
            <div className="frame333">
              <div>
                <ul>
                  <li>20+ years of expertise as a top-rated tour operator.</li>
                  <li>
                    Professional, friendly, and knowledgeable tour guides.
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Customizable packages to suit every traveler’s needs.</li>
                  <li>Commitment to quality and safety.</li>
                  <li>Include testimonials from past customers.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="frame332">
            <div className="frame331">
              <div className="frame330">
                <div className="cart1330">
                  <div className="frame30">
                    <div className="title30">2 Days Cruise</div>
                    <div className="sub30">
                      Experience The Ancient History & Beaches
                    </div>
                  </div>
                </div>
                <div className="cart2330">
                  <div className="frame30">
                    <div className="title30">3 Days Cruise</div>
                    <div className="sub30">
                      Discover The Land Of Pharaohs & Pyramids
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart331">
                <div className="frame30">
                  <div className="title30">Cat Ba Island</div>
                  <div className="sub30">
                    Embark On A Journey For Your Lifetime
                  </div>
                </div>
              </div>
            </div>
            <div className="cart332">
              <div className="title30">Halong Bay</div>
              <div className="sub30">
                Indulge In The Art, Culture, And Cuisine
              </div>
              <div className="button332">
                <a href="#">Add to voyage</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pic6 */}
      <div className="pic6">
        <div className="section5">
          <div className="tourPic6">
            <h2>Cruise Itineraries</h2>
          </div>

          <div className="grid">
            <div className="item item-1">
              <div className="frame4">
                <div className="titlefr4">Halong Bay</div>
                <div className="subfr4">
                  Indulge In The Art, Culture, And Cuisine
                </div>
              </div>
            </div>
            <div className="item item-2">
              <div className="frame4">
                <div className="titlefr4">Cat Ba Island</div>
                <div className="subfr4">
                  Embark On A Journey For Your Lifetime
                </div>
              </div>
            </div>
            <div className="item item-3">
              <div className="frame4">
                <div className="titlefr4">Halong Bay</div>
                <div className="subfr4">
                  Indulge In The Art, Culture, And Cuisine
                </div>
              </div>
            </div>
            <div className="item item-4">
              <div className="frame4">
                <div className="titlefr4">Halong Bay</div>
                <div className="subfr4">
                  Indulge In The Art, Culture, And Cuisine
                </div>
              </div>
            </div>
            <div className="item item-5">
              <div className="frame4">
                <div className="titlefr4">Halong Bay</div>
                <div className="subfr4">
                  Indulge In The Art, Culture, And Cuisine
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pic 7*/}
      <div className="pic7">
        <div className="frame329">
          <div className="titlePic7">
            <div className="mainPic7">Unforgettable Travel Experiences</div>
            <div className="subPic7">
              <p>
                With over 20 years of expertise, Asia Pacific Travel has been
                crafting memorable journeys for travelers worldwide.
              </p>
              <p>
                Our experienced tour guides and dedicated advisor team ensure
                every detail of your adventure is seamless and unforgettable.
              </p>
            </div>
          </div>
          <div className="frame116">
            {/* 6 cái thẻ ở đây */}
            {testimonials.map((item, index) => {
              return (
                <div
                  className="testimonials-card"
                  style={{
                    backgroundColor: index % 2 !== 0 ? "#0E47AB" : "#FFF",
                    border: index % 2 !== 0 ? "#0E47AB" : "#FFF",
                    marginTop:
                      index === 0 || index === 2 || index === 3 || index === 5
                        ? 24
                        : 0,
                  }}
                >
                  <div className="frame48">
                    <div className="avt">
                      <img src={item.image} />
                    </div>
                    <div className="nameJob">
                      <h3
                        style={{
                          color: index % 2 !== 0 ? "#FFF" : "#0E47AB",
                        }}
                      >
                        {item.name}
                      </h3>
                      <p
                        style={{
                          color: index % 2 !== 0 ? "#6A6A6A" : "#6a6a6a",
                        }}
                      >
                        {item.job}
                      </p>
                    </div>
                  </div>
                  <div
                    className="text48"
                    style={{
                      color: index % 2 !== 0 ? "#FFF" : "#000000",
                    }}
                  >
                    {item.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pic 8 */}
      <div className="pic8">
        <div className="frame65">
          <div className="title65">
            <h2>Affordable Cruise Packages</h2>
            <p>
              With over 20 years of expertise, Asia Pacific Travel has been
              crafting memorable journeys for travelers worldwide. Our
              experienced tour guides and dedicated advisor team ensure every
              detail of your adventure is seamless and unforgettable.
            </p>
          </div>
          <div className="frame64">
            {/* 3 cards */}
            {frame56.map((item, index) => {
              return (
                <div className="card64">
                  <div className="img64">
                    <img src={item.image} />
                  </div>
                  <div className="infoPic8">
                    <div className="frame56">
                      <div className="title56">{item.title}</div>
                      <div className="sub56">
                        <ul>
                          <li>{item.subtitle1}</li>
                          <li>{item.subtitle2}</li>
                          <li>{item.subtitle3}</li>
                          <li>{item.subtitle4}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="frame6131">
                      <div className="line6131"></div>
                      <div className="star6131">
                        <Star size={12} fill="#87BAFF" color="#87BAFF" />
                        <Diamond size={12} fill="#87BAFF" color="#87BAFF" />
                        <Star size={12} fill="#87BAFF" color="#87BAFF" />
                      </div>
                    </div>
                    <div className="costPic8">
                      <div className="realCost">{item.costPer}</div>
                      <div className="strength">{item.strength}</div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="img64">

            </div>
            <div className="infoPic8">
              <div className="frame56">
                <div className="title56">

                </div>
                <div className="sub56">
                  <ul>
                    <li>

                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                  </ul>
                </div>
              </div>
              <div className="frame6131">
                
              </div>
              <div className="costPic8">
                  <div className="realCost">
                    
                  </div>
                  <div className="strength">

                  </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
