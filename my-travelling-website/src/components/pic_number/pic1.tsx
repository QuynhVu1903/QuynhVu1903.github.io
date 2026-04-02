import { ChevronDown, Clock, Diamond, MapPin, Search, Ship, Star } from "lucide-react";
import React from "react";
import HorizontalBorder from "./horizontalBorder_pic1";
import BackgroundPic1 from "./backgroundPic1";

const Pic1 = () => {
  return (
    <div className="pic1">
        {/* horizontal Border */}
        <HorizontalBorder />
        {/* background pic1 */}
        <BackgroundPic1/>
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
  );
};

export default Pic1;
