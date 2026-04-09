import { Search, Ship } from "lucide-react";
import { useState } from "react";
import "../../App.css";
import CategorySelect from "./OptionsCategory";

// interface IProps {
//   addDestination: (name: string) => void;
// }
// props: IProps
const SearchDestination = () => {
  const [valueInput, setValueInput] = useState(""); // đây là function, destructuring array
  const [category, setCategory] = useState("");
  // const { addDestination } = props;
  // gọi func ở con
  const handleClick = () => {
    alert("Destination: " + valueInput + "\n" + "Category: " + category);
    setValueInput("");
    // setCategory("");
    //mỗi một lần ấn add thì xóa giá trị ở input
  };
  const handleOnChange = (name: string) => {
    setValueInput(name);
    // addDestination(name);
  };
  const newCategory = (name: string) => {
    setCategory(name);
  };

  // addNewToDo("eric")
  return (
    <div className="frame11">
      <div className="frame610">
        {/* gồm search và cruise */}
        <div className="frame6">
          <div className="frame6-icon">
            <Search />
          </div>
          <input
            className="frame6-text"
            type="text"
            id="destination"
            placeholder="Search destinations, hotels"
            onChange={(event) => handleOnChange(event.target.value)}
            value={valueInput}
          />
        </div>
        <div className="frame10">
          <div className="frame10-icon">
            <Ship />
          </div>
          <div className="frame10-text">
            <CategorySelect newCategory={newCategory} />
          </div>
        </div>
      </div>
      <div className="coolection-button">
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchDestination;
