import { CompleteIcon } from './CompleteIcon.js';
import { DeleteIcon } from './DeleteIcon.js';
import './TodoItem.css';

function TodoItem(props) {
    return (
      <li className="TodoItem">
        <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete}/>
        {/* <span 
          onClick={props.onComplete}
          className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
            V
        </span> */}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <DeleteIcon
          onClick={props.onDelete}/>
        {/* <span 
          className='Icon Icon-delete'
          onClick={props.onDelete}>
            X
        </span> */}
      </li>
    );
  }

export { TodoItem };