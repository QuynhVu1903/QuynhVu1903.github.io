import type { Person } from "../../App";

const TodoData = (props:{name:string,age:number,data:Person, todoList:any}) => {
    const { name, age, data, todoList } = props;
    console.log("check props: ", props)
    return (
      <div className="todo-data">
        <div>My name is {name}</div>
        <div>Data: {data.address}</div>
        <div>Learning React</div>
        <div>Watching Youtube</div>
        <div>
            {JSON.stringify(props.todoList)}
        </div>
      </div>
    );
}

export default TodoData;