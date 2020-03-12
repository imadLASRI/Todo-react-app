import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import './Addtodo.css';


const Todoform = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: inherit;
`;

const FormInput = styled.input`
    width: 100%;
    padding: 8px;
    margin: 10px;
    box-sizing: border-box;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    display: inline-block;
    outline: none;
    border: 2px solid grey;
    border-radius: 10px;
`;

const Submit = styled.button`
    width: 60%;
    line-height: 25px;
    font-size: 15px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    background: #4caf50;
    color: white;
    outline: none;
    border: none;
    border-radius: 10px;

    &:hover{
        background: #68c76c;
        cursor: pointer;
    }
`;

const ErrorLabel = styled.span`
    width: 80%;
    color: red;
    font-size: 15px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    user-select: none;
    display: ${props => (props.shown) ? 'block' : 'none'};
    animation: pop 0.5s ease-in-out infinite alternate;

    @keyframes pop {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0.1;
        }
    }
`;

const Addtodo = (props) => {

    const shouldFadeIn = props.display[0];

    const fade = useSpring({
        width: shouldFadeIn ? "100%": "0%",
        display: shouldFadeIn ? "flex": "none"
    })

    const [formError, setFormError] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const tasksList = props.tasksList[0];

        if(e.target.todo.value != '' && e.target.deadline.value != '' ) {
           setFormError(false);

            const newTask = {
                id: tasksList.length + 1 ,
                todo: e.target.todo.value,
                deadline: e.target.deadline.value,
                status: 'new'
            }

            props.tasksList[1]([...tasksList, newTask]);

            // clearing fields and hiding the form
            e.target.todo.value = '';
            e.target.deadline.value = '';
            props.display[1](false);
        }
        else{
           console.log('fill form plz');
           setFormError(true);
        }
    }

    const handleInputChange = (e) => {
        if(e.target.value != '' && formError){
           setFormError(false);
        }
    }

    return (
        <animated.div style={fade} >
            <div className="Addtodo" >
                <Todoform onSubmit={ handleFormSubmit } autocomplete="off">
                    <ErrorLabel shown={ formError } >Please fill all fields !</ErrorLabel>

                    <FormInput placeholder="What ToDo.." name="todo" onChange={ handleInputChange } />
                    <FormInput type="text" maxlength="10" placeholder="Task dead Line" name="deadline" onChange={ handleInputChange } />

                    <Submit>Add Task</Submit>
                </Todoform>
            </div>
        </animated.div>

    );
}

export default Addtodo;