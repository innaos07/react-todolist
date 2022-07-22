import TodoForm from '../../containers/TodoForm/TodoForm';
import TodoList from '../../containers/TodoList/TodoList';
import FilterList from '../FilterList/FilterList';


function Main() {

    return (
        <>
            <TodoForm />
            <FilterList />
            <TodoList />
        </>
    )
}

export default Main;