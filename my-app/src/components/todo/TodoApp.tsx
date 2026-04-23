import "./todo.css";
// import reactLogo from "./assets/react.svg";
import reactLogo from '../../assets/react.svg';
import { useState } from "react";
import TodoNew from "./TodoNew";
import TodoData from "./TodoData";

const TodoApp = () => {
  // giá trị khởi tạo là mảng rỗng
  const [todoList, setTodoList] = useState<{ id: Number; name: string }[]>([
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
    setTodoList(newTodo);
  };

  const radomIntFromInterval = (min: number, max: number): Number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewToDo={addNewToDo} />

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

export default TodoApp;