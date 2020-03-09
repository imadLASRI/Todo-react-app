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
    height: 40px;
    margin-top: 60px; 
    margin-bottom: 10px; 
    background-image: url('${ props => props.img}');
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
`;


const SideLabel = styled.h1`
    margin-bottom: 40px;
    font-size: 15px;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: inherit;
`;

const Sidebar = () => {

    return (
        <div className="Container">
            <a href="#"><Logo /></a>

            <a href="">
                <SideLabel><SideNav img="img/tasks.png" />Tasks</SideLabel>
            </a>
            
            <a href="">
                <SideLabel><SideNav img="img/inprogress.png" />Inprogress</SideLabel>
            </a>

            <a href="">
                <SideLabel><SideNav img="img/completed.png" />Completed</SideLabel>
            </a>

            <a href="">
                <SideLabel><SideNav img="img/addtask.png" />New Task</SideLabel>
            </a>
        </div>
    );
}

export default Sidebar;