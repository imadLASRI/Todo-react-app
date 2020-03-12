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
    user-select: none;
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
    opacity: ${props => (props.notYet) ? '0.2' : '1'};
    user-select: none;

    &:hover{
        color: grey;
        animation: ${props => (!props.notYet) ? 'pop 0.3s ease-in-out infinite alternate'  : '' };
    }

    @keyframes pop {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0.1;
        }
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

const Sidebar = (props) => {

    return (
        <div className="Sidebar">
            <a href="#"><Logo /></a>

            <SideNav img="img/addtask.png" onClick={ () => props.addTask[1](!props.addTask[0]) }>
                <SideLabelContainer>
                    <SideLabel>New Task</SideLabel>
                </SideLabelContainer>
            </SideNav>

            <SideNav img="img/tasks.png" notYet>
                <SideLabelContainer>
                    <SideLabel>Tasks</SideLabel>
                </SideLabelContainer>
            </SideNav>

            <SideNav img="img/inprogress.png" notYet>
                <SideLabelContainer>
                    <SideLabel>Inprogress</SideLabel>
                </SideLabelContainer>
            </SideNav>

            <SideNav img="img/completed.png" notYet>
                <SideLabelContainer>
                    <SideLabel>Completed</SideLabel>
                </SideLabelContainer>
            </SideNav>
        </div>
    );
}

export default Sidebar;