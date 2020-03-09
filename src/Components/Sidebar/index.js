import React from 'react';
import styled from 'styled-components';

// component container css
import './Sidebar.css';

const Logo = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 60px;
    background-image: url('img/todo-logo.png');
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;

`;

const SideNav = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 10px; 
    background-image: url('${ props => props.img}');
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
`;


const SideLabel = styled.h1`
    margin-bottom: 40px;
    font-size: 15px;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: white;
    cursor: pointer;

    &:hover{
        color: grey;
    }
`;

const Sidebar = () => {

    return (
        <div className="Sidebar">
            <a href="#"><Logo /></a>

            <SideNav img="img/tasks.png" /><SideLabel>Tasks</SideLabel>
            <SideNav img="img/inprogress.png" /><SideLabel>Inprogress</SideLabel>
            <SideNav img="img/completed.png" /><SideLabel>Completed</SideLabel>
            <SideNav img="img/addtask.png" /><SideLabel>New Task</SideLabel>
        </div>
    );
}

export default Sidebar;