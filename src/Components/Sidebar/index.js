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
    height: 10%;
    margin-bottom: 40px;
    background-image: url('${ props => props.img}');
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
    color: white;
    position: relative;

    &:hover{
        color: grey;
    }
`;

const SideLabelContainer = styled.div`
    width: 100%;
    text-align: center;
    position: absolute;
    top: 105%;
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
        <div className="Sidebar">
            <a href="#"><Logo /></a>

            <SideNav img="img/tasks.png" >
                <SideLabelContainer>
                    <SideLabel>Tasks</SideLabel>
                </SideLabelContainer>
            </SideNav>

            <SideNav img="img/inprogress.png" >
                <SideLabelContainer>
                    <SideLabel>Inprogress</SideLabel>
                </SideLabelContainer>
            </SideNav>

            <SideNav img="img/completed.png" >
                <SideLabelContainer>
                    <SideLabel>Completed</SideLabel>
                </SideLabelContainer>
            </SideNav>

            <SideNav img="img/addtask.png" >
                <SideLabelContainer>
                    <SideLabel>New Task</SideLabel>
                </SideLabelContainer>
            </SideNav>
        </div>
    );
}

export default Sidebar;