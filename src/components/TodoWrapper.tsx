import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4();
interface Todo {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}
const TodoWrapper = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (todo: string) => {
    //todo is the value
    setTodos([
      ...todos, //make a copy of todos to avoid mutation. or immutability
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]); //we create a set of attributes here. ...todos make a copy of todos. id create an id, others are set of attributes which we will be use next.
    console.log(todos);
  };
  const toggleComplete = (id:string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  const deleteTodo = (id:string) => setTodos(todos.filter((todo) => todo.id !== id));
  const editTodo = (task:string, id:string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  }
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (//borrow todo and index from each todo item in todo array. The order matters. You can see the todos array has the copy of itself as first and next the index 
        todo.isEditing?(<EditTodoForm editTodo={editTodo} task={todo}/>):
       ( <Todo task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />)
      ))}
    </div>
  );
};

export default TodoWrapper;
