import React from "react";

const ItemTest = ({ item, index, isOdd, style }: any) => {
  return (
    <div
      className="testimonials-card"
      style={{
        backgroundColor:isOdd? "#0E47AB" : "#FFF",
        border: isOdd ? "#0E47AB" : "#FFF",
        ...style,
      }}
    >
      <div className="frame48">
        <div className="avt">
          <img src={item.image} />
        </div>
        <div className="nameJob">
          <h3
            style={{
              color: isOdd ? "#FFF" : "#0E47AB",
            }}
          >
            {item.name}
          </h3>
          <p
            style={{
              color: isOdd  ? "#6A6A6A" : "#6a6a6a",
            }}
          >
            {item.job}
          </p>
        </div>
      </div>
      <div
        className="text48"
        style={{
          color: isOdd  ? "#FFF" : "#000000",
        }}
      >
        {item.content}
      </div>
    </div>
  );
};

export default ItemTest;
