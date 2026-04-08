import { frame56 } from "../../shared/frame56";
import ItemFrame56 from "../frame56";

const AffordableCruisePackages = () => {
    return (
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
              return <ItemFrame56 item={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    )
}
export default AffordableCruisePackages