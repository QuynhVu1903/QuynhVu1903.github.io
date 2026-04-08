import { useState } from "react";
//truyền function addNewToDo
interface IProps {
  addNewToDo: (name: string) => void;
}

const TodoNew = (props: IProps) => {
  const [valueInput, setValueInput] = useState("eric"); // đây là function, destructuring array
  const { addNewToDo, searchName } = props;
  // gọi func ở con
  const handleClick = () => {
    addNewToDo(valueInput);
    setValueInput("");
    //mỗi một lần ấn add thì xóa giá trị ở input
  };
  const handleOnChange = (name: string) => {
    setValueInput(name);
    searchName(name);
  };


  // addNewToDo("eric")
  return (
    <div className="todo-new">
      <input
        type="text"
        // biến event của html, target là đang tác động vào biến (gì) input, input có thuộc tính là value, vd: getElementById.value
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>

    </div>
  );
};

export default TodoNew;
