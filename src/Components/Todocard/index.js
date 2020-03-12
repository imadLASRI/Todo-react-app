import React from 'react';
import styled from 'styled-components';

import './Todocard.css';

import Task from '../Task';

const CardHeader = styled.div`
    width: 100%;
    height: 35px;
    background-color: ${props => (props.color) ? props.color : '#5a8df5' };
    border-radius: 5px 5px 0 0;
    user-select: none;
`;

const CardHeaderTitle = styled.h1`
    font-size: 15px;
    margin: 0 10px !important;
    padding-top: 10px;
    color: white;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
`;

const TaskContainer = styled.div`
    height: 92%;
    overflow: auto;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

const Todocard = ( props ) => {

    return (
        <div className="Todocard" >
            <CardHeader color={props.color}>
                <CardHeaderTitle>{props.title}</CardHeaderTitle>
            </CardHeader>

            <TaskContainer>
                {props.children}

                {props.tasks.map( task => {
                    return (
                        (task.status == props.status) && 
                            <Task 
                                key={task.id}
                                borderColor={props.color} 
                                deadline={task.deadline} 
                                status={task.status}

                                thisTask={task}
                                tasks={props.tasks}
                                setTasks={props.setTasks}
                            />
                    );
                })}
            </TaskContainer>
        </div>
    );
}

export default Todocard;