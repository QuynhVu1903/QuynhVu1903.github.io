import { ArrowRight } from "lucide-react";
import { cruisePackages } from "../../shared/mocks";
import Cruise from "../cruise";

const CruisePackages = () => {
  return (
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
            return <Cruise item={item} key={item} />;
          })}
          {/* het card */}
        </div>
      </div>
    </div>
  );
};
export default CruisePackages