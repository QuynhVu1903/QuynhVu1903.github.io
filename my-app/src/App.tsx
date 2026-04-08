import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
export type Person = {
  address: string;
  country: string;
};
// export const data: Person = {
//   address: "Hanoi",
//   country: "Vietnam"
// }

const App = () => {
  // giá trị khởi tạo là mảng rỗng
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching Youtube" }
  ]);

  const addNewToDo = (name: string) => {
    const newTodo = {
      id: radomIntFromInterval(1, 1000000),
      name: name,
    };
    //sao chép lại todoList rồi thêm newTodo
    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (id: any) => {
    // điều kiện: đối với từng phần tử phải khác với id mình truyền vào
    const newTodo = todoList.filter((item) => item.id !== id);

    // for (let i = 0; i < todoList.length; i++) {
    //   if (id === todoList[i].id) {
    //     setTodoList(todoList.splice(i, 1));
    //   }
    // }
    // let i = 0;
    // while (i < todoList.length) {
    //   if (id === todoList[i].id) {
    //     setTodoList([
    //       ...todoList.slice(0, i),
    //       ...todoList.slice(i + 1, todoList.length),
    //     ]);
    //     break;
    //   } else {
    //     i = i + 1;
    //   }
    // }

    setTodoList(newTodo);
  };


  const radomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewToDo={addNewToDo}/>

      {todoList.length > 0 ? (
        <TodoData
          // bên trái: tên của prop truyền từ cha sang con, bên phải là giá trị của nó - lấy từ cha
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
      ) : (
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      )}
    </div>
  );
};

export default App;
