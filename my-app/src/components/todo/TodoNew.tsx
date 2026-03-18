import { useState } from "react";

interface IProps {
  addNewToDo: (name: string) => void;
}

const TodoNew = (props: IProps) => {

  const [valueInput, setValueInput] = useState("eric");
  const {addNewToDo} = props;
  // gọi func ở con
  const handleClick = () => {
    addNewToDo(valueInput)
  }
  const handleOnChange = (name: string) => {
    console.log("handleOnChange ", name)
    setValueInput(name);
  }
  // addNewToDo("eric")
    return (
        <div className="todo-new">
        <input type="text"
          onChange={(event) => handleOnChange(event.target.value)}
        />
        <button
          style={{cursor: "pointer"}}
          onClick={handleClick}
        >Add</button>
        <div>
          My text input is = {valueInput}
        </div>
      </div>
    );
}

export default TodoNew