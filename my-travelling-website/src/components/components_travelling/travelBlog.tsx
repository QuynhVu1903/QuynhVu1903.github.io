import { blog } from "../../shared/blog";
import ItemBlog from "../ItemBlog";

const TravelBlog = () => {
  return (
    <div className="pic10">
      <div className="bgPic10">
        <div className="titlePic10">
          <h2>Travel Blog</h2>
          <p>
            With over 20 years of expertise, Asia Pacific Travel has been
            crafting memorable journeys for travelers worldwide. Our experienced
            tour guides and dedicated advisor team ensure every detail of your
            adventure is seamless and unforgettable.
          </p>
        </div>
        <div className="frame142">
          <div className="health">
            <div className="imgHealth">
              <img src="public/blog.png" />
            </div>
            <div className="frame861">
              <div className="frame336">
                <div className="metaData">
                  <div className="metaLeft">Jul 10, 2024</div>
                  <div>|</div>
                  <div className="metaRight">3 Min Read</div>
                </div>
                <div className="chip">Ha Long Bay Travel</div>
              </div>
              <div className="text336">
                Glide through the tranquil waters, discover hidden lagoons, and
                enjoy swimming in the calm bays.
              </div>
            </div>
          </div>
          <div className="frame141">
            {/* Map 4 thẻ dọc */}

            {blog.map((item, index) => {
              return <ItemBlog key={item} item={item} />;
            })}

            {/* Hết card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBlog
