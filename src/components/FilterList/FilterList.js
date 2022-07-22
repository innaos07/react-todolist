import './FilterList.css';
import NavItem from '../../containers/NavItem/NavItem';


function FilterList() {
    const list = [
        {filter: 'SHOW_ALL', name: 'All'},
        {filter: 'SHOW_ACTIVE', name: 'Active'},
        {filter: 'SHOW_COMPLETE', name: 'Completed'}
    ];

    return (
        <>
            <nav className='todo-nav'>
                <ul className='todo-nav__list'>
                    {list.map((item) => <NavItem key={item.filter} filter={item.filter}>{item.name}</NavItem>)}
                </ul>
            </nav>
        </>
    )
}

export default FilterList;
