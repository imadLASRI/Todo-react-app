import React from 'react';
import styled from 'styled-components';

import './Task.css';

const Deadline = styled.span`
    width: 100%;
    display: block;
    text-align: right;
    color: red;
    font-weight: bold;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
`;

const TaskContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;

`;

const Checkmark = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 5px;
    cursor: pointer;
`;

const Task = (props) => {
    const handleStatusChange = (id) => {
        const allTasks = [...props.tasks];
        const taskToEdit = allTasks.find(task => task.id === id);

        (taskToEdit.status === 'new') ? taskToEdit.status = 'ongoing' : 
        ((taskToEdit.status === 'done') ? taskToEdit.status = 'ongoing' : taskToEdit.status = 'done');

        props.setTasks(allTasks);
    }

    return (
        <div className="Task" style={{ borderTop: '2px solid ' + props.borderColor }}>
            <TaskContainer>
                <Checkmark 
                    type="checkbox" 
                    checked={props.status == 'done' ? true : false} 
                    onChange={ () => handleStatusChange(props.thisTask.id) }
                    />
                {props.thisTask.todo}
            </TaskContainer>

            <Deadline>
                {props.deadline}
            </Deadline>
        </div>

    );
}

export default Task;