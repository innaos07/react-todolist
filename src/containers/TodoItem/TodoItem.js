import './TodoItem.css';
import {useDispatch} from 'react-redux';
import {deleteTask, toggleTask, editTask} from '../../action';


function TodoItem({todo}) {
    const dispatch = useDispatch();

    return (
        <>
            <span className={`todo-list__task ${todo.active ? '' : 'todo-list__task--completed'}`}>
                {todo.text}
            </span> 
            <button 
                type='button' 
                className={`btn ${todo.active ? 'todo-list__btn--active' : 'todo-list__btn--complete'}`}
                onClick={()=>dispatch(toggleTask(todo.id))}>
            </button>  
            <button 
                type='button' 
                className='btn todo-list__btn-edit' 
                onClick={()=>dispatch(editTask(todo.id))}>        
            </button> 
            <button 
                type='button' 
                className='btn todo-list__btn-delete' 
                onClick={()=>dispatch(deleteTask(todo.id))}>        
            </button> 
        </>
    )
}

export default TodoItem;