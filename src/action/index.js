export const addTask =(text)=> ({
    type: 'ADD_TASK',
    id: Math.random().toString(36).substr(3),
    text
})

export const deleteTask =(id)=> ({
    type: 'DELETE_TASK',
    id
})

export const toggleTask =(id)=> ({
    type: 'TOGGLE_TASK',
    id
})

export const editTask =(id)=> ({
    type: 'EDIT_TASK',
    id
})

export const saveTask =(id, text)=> ({
    type: 'SAVE_TASK',
    id,
    text
})

export const cancelTask =(id)=> ({
    type: 'СANCEL_TASK',
    id
})

export const setVisibilityFilter =(filter)=> ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})