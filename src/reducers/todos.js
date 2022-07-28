const todos =(state = [], action)=> {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state, 
                {
                    text: action.text,
                    id: action.id,
                    complete: false,
                    edit: false,
                    active: true,
                }
            ]

        case 'DELETE_TASK': 
            return state.filter((todo) => todo.id !== action.id);

        case 'TOGGLE_TASK':
            return state.map((todo) => 
                todo.id === action.id ? {...todo, complete: !todo.complete, active: !todo.active} : todo
            )

        case 'EDIT_TASK':
            return state.map((todo) => 
                todo.id === action.id ? {...todo, edit: !todo.edit} : todo
            )

        case 'SAVE_TASK': 
            return state.map((todo) => 
                todo.id === action.id ? {...todo, edit: !todo.edit, text: action.text} : todo
            )

        case 'СANCEL_TASK': 
            return state.map((todo) => 
                todo.id === action.id ? {...todo, edit: !todo.edit} : todo
            ) 
               
        default: 
            return state;
    }
}

export default todos;