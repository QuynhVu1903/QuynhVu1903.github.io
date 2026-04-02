import { Diamond, Star } from "lucide-react";
import React from "react";

const ItemFrame56 = ({ item, index}: any) => {
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
};

export default ItemFrame56;
