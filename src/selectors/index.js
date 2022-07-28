import { createSelector } from '@reduxjs/toolkit';


const getVisibilityFilter =(state)=> state.visibilityFilter;
const getTodos =(state)=> state.todos;


export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodos],
    (filter,  todos) => {
        switch (filter) {
            case 'SHOW_ALL':
                return todos;

            case 'SHOW_ACTIVE':
                return todos.filter((todo) => todo.active);

            case 'SHOW_COMPLETE':
                return todos.filter((todo) => todo.complete);

            default: 
                return todos;
        }
    }
)