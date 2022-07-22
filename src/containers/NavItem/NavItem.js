import './NavItem.css';
import {NavLink, useSearchParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setVisibilityFilter} from '../../action';


function NavItem({filter, children}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const statusFilter = searchParams.get('filter');
    const dispatch = useDispatch();

    const filterCurrent = (
        (filter === 'SHOW_ALL' && !statusFilter) ||
        (filter === statusFilter) ) 
        ? 'todo-nav__link--active' : '';

    return (
        <>
            <li className='todo-nav__item'>
                <NavLink 
                    to={filter === 'SHOW_ALL' ? '/' : `/?filter=${filter}`} 
                    className={`todo-nav__link ${filterCurrent}`} 
                    onClick={() => dispatch(setVisibilityFilter(`${filter}`))}>
                    {children}
                </NavLink>
            </li>
         
        </>
    )
    
 }

 export default NavItem;