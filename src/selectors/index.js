import {createSelector} from '@reduxjs/toolkit';


const getVisibilityFilter =(state)=> state.visibilityFilter;
const getTodos =(state)=> state.todos;


export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodos],
    (filter,  todos) => {
        switch (filter) {
            case 'SHOW_ALL':
            console.log('all', filter, todos)
                return todos;

            case 'SHOW_ACTIVE':
            console.log('active', filter, todos)
                return todos.filter((todo) => todo.active);

            case 'SHOW_COMPLETE':
            console.log('COMPLETE', filter, todos)
                return todos.filter((todo) => todo.complete);

            default: 
                return todos;
        }
    }
)