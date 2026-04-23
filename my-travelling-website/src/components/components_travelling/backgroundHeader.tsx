import { useState } from "react";
import {
  ChevronDown,
  Clock,
  Diamond,
  MapPin,
  Search,
  Ship,
  Star,
} from "lucide-react";
import React from "react";
import HorizontalBorder from "./horizontalBorder_pic1";
import BackgroundPic1 from "./backgroundPic1";
import SearchDestination from "./SearchDestination";
import "../../App.css";

const BackgroundHeader = () => {
  const [destinationList, setDestinationList] = useState([
    // { id: 1, name: "Ha Long" },
    // { id: 2, name: "Quang Ninh" }
  ]);

  // const addDestination = (name: string) => {
  //   const newSearch = {
  //     id: radomIntFromInterval(1, 1000000),
  //     name: name,
  //   };
  //   //sao chép lại todoList rồi thêm newTodo
  //   setDestinationList([...destinationList, newSearch]);
  // };
  // const radomIntFromInterval = (min, max) => {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // };
  return (
    <div className="pic1">
      {/* horizontal Border */}
      <HorizontalBorder />
      {/* background pic1 */}
      <BackgroundPic1 />
      <div className="contentPic1">
        <div className="frame337">
          <div className="frame322">
            <div className="frame322-up">Unforgettable Halong Bay Cruises</div>
            <div className="frame322-down">
              with Asia Pacific Travel - Since 2002
            </div>
          </div>
          <SearchDestination  />
          {/* addDestination={addDestination} */}
        </div>
      </div>
    </div>
  );
};

export default BackgroundHeader;
