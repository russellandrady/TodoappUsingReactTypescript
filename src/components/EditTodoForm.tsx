import { useState } from "react";
interface TodoItems {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}
interface TodoFormProps {
  editTodo: (task:string, todo: string) => void; // Specify the type of the addTodo prop
  task: TodoItems;
}

const EditTodoForm: React.FC<TodoFormProps> = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //prevent the page from refreshing
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="todo-input"
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
