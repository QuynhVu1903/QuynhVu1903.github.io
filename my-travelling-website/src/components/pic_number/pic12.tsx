import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Send } from "lucide-react"

const Pic12 = () => {
    return (
              <div className="pic12">
        <div className="bgPic12">
          <div className="linePic12">
            <div className="borderPic12">
              <div className="frame6319">
                <h3>Sign up for our free newsletter</h3>
                <p>Receive news and offers from Halong Bay Tours</p>
              </div>
              <div className="formPic12">
                <input
                  onChange={(event) => console.log("AD<<<", event.target.value)}
                  className="inputPic12"
                  placeholder="Enter your Email"
                ></input>
                <button className="buttonPic12">
                  <div>Subscribe Now</div>
                  <div>
                    <Send size={18} />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="frame6317">
            <div className="frame6312">
              <h4>Halong Tours - Asia Pacific Travel</h4>
              <p>
                Halongbaytours.com is a premium cruise and tour booking service
                offered by Blue Dragon Tours. Here on our website you can find
                listings of the best selected cruises of Halong Bay, one of the
                UNESCO World's Natural Heritage.
              </p>
              <div className="frame6308">
                <div>
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </div>
            </div>
            <div className="frame6313">
              <div className="quick6313">Quick Links</div>
              <div className="list6313">
                <ul>
                  <li>About Us</li>
                  <li>Daily Tours</li>
                  <li>Exclusive Tours</li>
                  <li>Special Offers</li>
                  <li>Group Tours</li>
                  <li>Private Tours</li>
                  <li>Customize Tours</li>
                </ul>
              </div>
            </div>
            <div className="frame6314">
              <div className="quick6313">
                {/* heading6314 */}
                Get In Touch
              </div>
              <div className="container6314">
                {/* 7 */}
                <div className="frame6310">
                  <div className="icon6314">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <p className="text6314">info@halongbaytours.com</p>
                </div>
                <div className="heading6310">Hanoi Head Office</div>
                <div className="frame6309">
                  <div className="icon6314">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div className="text6314">
                    <p>+84 24 38364212</p>
                    <p>+84 24 37568868</p>
                  </div>
                </div>
                <div className="frame6311">
                  <div className="icon6314">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <p className="text6314">
                    5-87 Hoang Quoc Viet street, Cau Giay District, Hanoi,
                    Vietnam
                  </p>
                </div>
                <div className="heading6310">Ho chi minh City Office</div>
                <div className="frame6313b">
                  <div className="icon6314">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <p className="text6314">+84 28 38 3333 88</p>
                </div>
                <div className="frame6312b">
                  <div className="icon6314">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <p className="text6314">
                    Room 3A2, First floor, Toong Office, 126 Nguyen Thi Minh
                    Khai Street, Distric 3, Ho chi minh City
                  </p>
                </div>
              </div>
            </div>
            <div className="frame4020">
              <div className="quick6313">
                {/* heading6314 */}
                Send us a message
              </div>
              <div className="button6313">
                <div className="form-group">
                  <input type="text" required />
                  <label>
                    Your name <span>*</span>
                  </label>
                </div>

                <div className="form-group">
                  <input type="email" required />
                  <label>
                    Email <span>*</span>
                  </label>
                </div>

                <div className="form-group">
                  <input type="text" required />
                  <label>
                    Phone Number <span>*</span>
                  </label>
                </div>
              </div>

              {/* hết input */}
              <button className="button4020">Send Now</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Pic12