import React from 'react';
import styled from 'styled-components';

import './Task.css';



const Task = (props) => {

    return (
        <div className="Task" style={{ borderTop: '2px solid ' + props.borderColor }}>
            {props.children}
        </div>

    );
}

export default Task;