import './TodoList.css';
import {useSelector} from 'react-redux';
import Todo from '../../components/Todo/Todo';
import {getVisibleTodos} from '../../selectors';


function TodoList() {
    const todos = useSelector(getVisibleTodos);

    return (
        <>
            <ul className='todo-list'>
                {todos.map((todo) => <Todo key={todo.id} todo={todo}/>)}
            </ul>
        </>
    )
}

export default TodoList;