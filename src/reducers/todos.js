const todos =(state = [], action)=> {
    switch (action.type) {
        case 'ADD_TASK':
            console.log('ADD_GOODS', state)
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
            console.log('DELETE_TASK', state, action.id)
            return state.filter((todo) => todo.id !== action.id);

        case 'TOGGLE_TASK':
            console.log('TOGGLE_TASK', state, action.id)
            return state.map((todo) => 
                todo.id === action.id ? {...todo, complete: !todo.complete, active: !todo.active} : todo
            )

        case 'EDIT_TASK':
             console.log('EDIT_TASK', state, action.id)
            return state.map((todo) => 
                todo.id === action.id ? {...todo, edit: !todo.edit} : todo
            )

        case 'SAVE_TASK': 
            console.log('save_TASK', state, action.id)
            return state.map((todo) => 
                todo.id === action.id ? {...todo, edit: !todo.edit, text: action.text} : todo
            )

        case 'СANCEL_TASK': 
            console.log('СANCEL_TASK', state, action.id)
            return state.map((todo) => 
                todo.id === action.id ? {...todo, edit: !todo.edit} : todo
            ) 
               
        default: 
            return state;
    }
}

export default todos;