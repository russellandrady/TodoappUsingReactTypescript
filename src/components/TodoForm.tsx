import { useState } from "react";

interface TodoFormProps {
  addTodo: (todo: string) => void; // Specify the type of the addTodo prop
}

const TodoForm: React.FC<TodoFormProps> = ({addTodo}) => {
  const[value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();//prevent the page from refreshing
    addTodo(value);
    setValue("");
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="todo-input"
        placeholder="What is the task today?"
        onChange={(e)=>setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
