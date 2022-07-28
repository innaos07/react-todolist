import './EditArea.css'
import { useState, useEffect, useRef } from 'react';
import { saveTask, cancelTask } from '../../action';
import { useDispatch } from 'react-redux';


function EditArea({todo}) {
    const [editInput, setEditInput] = useState(todo.text);
    const dispatch = useDispatch();
    const focusRef = useRef(null);

    useEffect(() => {
        focusRef.current.focus();
        focusRef.current.selectionStart = focusRef.current.selectionEnd = editInput.length;
    })

    const handlerSubmit =(e)=> {
        e.preventDefault();

        if(!editInput.trim()){
            return;
        }
        dispatch(saveTask(todo.id, editInput));
    }

    return(
        <>
            <form  className='todo-list__form-edited' onSubmit={handlerSubmit}>
                <textarea 
                    value={editInput} 
                    className='todo-list__task-edited' 
                    placeholder={'waiting for your text...'}
                    ref={focusRef}
                    onChange={(e) => setEditInput(e.target.value)}
                    >
                </textarea>
                <button type='submit' className='btn todo-list__btn-save'></button>
                <button     
                    type='button' 
                    className='btn todo-list__btn-cancel' 
                    onClick={() => dispatch(cancelTask(todo.id))}>
                </button>
            </form>        
        </>
    )
}

export default EditArea;