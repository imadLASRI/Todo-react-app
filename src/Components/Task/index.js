import React from 'react';
import styled from 'styled-components';

import './Task.css';



const Task = (props) => {

    return (
        <div className="Task">
            {props.children}
        </div>

    );
}

export default Task;