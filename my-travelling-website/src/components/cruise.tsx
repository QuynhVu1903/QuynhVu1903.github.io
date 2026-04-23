import { Heart } from "lucide-react";

const Cruise = ({ item, index }: any) => {
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
};

export default Cruise;
