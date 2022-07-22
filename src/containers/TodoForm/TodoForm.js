import React from 'react';
import './TodoForm.css'
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../../action';
import {useSearchParams} from 'react-router-dom';


function TodoForm() {
    const [userInput, setUserInput] = useState('');
    const [activeInput, setActiveInput] = useState(false);
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const statusFilter = searchParams.get('filter');

    const addedActiveInput =()=> {
        setActiveInput(true)
        setTimeout(deletedActiveInput, 1000)
    }

    const deletedActiveInput =()=> {
        setActiveInput(false)
    }

    const setStatusDefault =()=> statusFilter ? setSearchParams("") : null;

    const handlerSubmit =(e)=> {
        e.preventDefault();
        setStatusDefault();
        if(!userInput.trim()){
            return;
        }
        dispatch(addTask(userInput));
        addedActiveInput();
        setUserInput("");
    }

    return (
        <form onSubmit={handlerSubmit} className='todo-form'>
            <textarea 
                className={`todo-form__text ${activeInput? 'todo-form__text--active': ''}`}
                value={userInput}
                placeholder={activeInput? 'task added' : 'waiting for your text...'} 
                onChange={(e) => setUserInput(e.target.value)}>
            </textarea>
            <button className='todo-form__btn-add'>add</button>
        </form>
    )
}

export default TodoForm;