import './Todo.css';
import EditArea from '../../containers/EditArea/EditArea';
import TodoItem from '../../containers/TodoItem/TodoItem';


function Todo({todo}) {
    const isEdit = todo.edit;

    return (       
        <>
            <li key={todo.id} className='todo-list__item'>
                {  isEdit
                    ?  <EditArea todo={todo}/>
                    :  <TodoItem todo={todo}/>
                }    
            </li>
        </>
    )
}

export default Todo;