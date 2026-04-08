import { testimonials } from "../../shared/test";
import ItemTest from "../ItemTest";

const UnfogettableExperiences = () => {
    return (
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
                <ItemTest
                  item={item}
                  key={index}
                  isOdd={index % 2 !== 0}
                  style={{
                    marginTop:
                      index === 0 || index === 2 || index === 3 || index === 5
                        ? 24
                        : index === 1 || index === 4
                          ? -35
                          : 0,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    )
}

export default UnfogettableExperiences