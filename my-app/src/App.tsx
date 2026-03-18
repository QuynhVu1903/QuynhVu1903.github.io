import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
export type Person = {
  address: string
  country: string
}
export const data: Person = {
  address: "Hanoi",
  country: "Vietnam"
}


const App = () => {
  // giá trị khởi tạo là mảng rỗng
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching Youtube" }
  ])
  const name = "Eric";
  const age = 25;

  const addNewToDo = (name: string) => {
    const newTodo = {
      id: radomIntFromInterval(1, 1000000),
      name: name
    }
    //sao chép lại todoList rồi thêm newTodo
    setTodoList([...todoList, newTodo])
  }

  const radomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewToDo={addNewToDo}
      />
      <TodoData
        name={name}
        age={age}
        data={data}
        todoList={todoList}

      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
        {/* sử dụng biến số trong TSX */}
      </div>
    </div>
  )
}

export default App
