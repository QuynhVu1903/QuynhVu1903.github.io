import React from "react";

const ItemBlog = ({ item }: any) => {
  return (
    <div className="health-card">
      <div className="img-card">
        <img src={item.image} />
      </div>
      <div className="frame860">
        <div className="container-card">
          <div className="meta-card">
            <div className="date-card">{item.date}</div>
            <div>|</div>
            <div className="min-card">{item.min}</div>
          </div>
          <div className="chip-card">{item.label}</div>
        </div>
        <div className="text-card">{item.content}</div>
      </div>
    </div>
  );
};

export default ItemBlog;
