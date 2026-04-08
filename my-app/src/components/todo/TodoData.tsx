import type { Person } from "../../App";
// name:string,age:number,data:Person,
const TodoData = (props: { todoList: any, deleteTodo: any }) => {
  const { todoList, deleteTodo } = props;
  
  const handleClick = (id: any) => {
    deleteTodo(id)
  }
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
        <div className={`todo-item`} key={item.id}>
          <div>{item.name}</div>
          
          <button
          onClick={() => handleClick(item.id)}
          style={{cursor: "pointer"}}>Delete</button>
        </div>
      )})}

    </div>
  );
};

export default TodoData;


// không sử dụng chỉ số của mảng để làm key ( key ={index})
// Key phù hợp:
// - sử dụng id lấy từ backend