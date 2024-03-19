import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
interface TodoItems {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}
interface TodoProps {
  task: TodoItems; // Specify the type of the addTodo prop
  toggleComplete: (id:string) => void;
  deleteTodo: (id:string) => void;
  editTodo: (task:string,id:string) => void;
}
const Todo: React.FC<TodoProps> = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className="Todo">
      <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.task, task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo