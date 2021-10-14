import styled from 'styled-components';

export const Base = styled.div`
    background-color: #2D2D2D;
    font-size: medium;
    padding: 20px;
    color: whitesmoke;
    height: 100vh;
`;


export const Title = styled.h1`
    color: #1FDF6F;
`;

export const SidebarContainer = styled.div`
    background-color: #2d2d2d;
    position: absolute;
    right: ${props => `${props.right}px`};
    border-left: 2px solid #353637;
    border-top: 2px solid #353637;
    align-items: center;
    display: flex;
    text-align: center;
    flex-direction: column;
    width: 400px;
`;

export const ModuleContainer = styled.div`
    border-bottom: 2px solid #353637;
    width: 100%;
    
    ${Title} {
        border-bottom: 5px solid #454647;
        border-left: 5px solid #454647;
        background-color: #353637;
        margin: 0;
    }

    ul {
        padding-left: 0;
        width: 80%;
        margin: auto;
        margin-bottom: 20px;
        li {
            font-weight: bold;
            padding: 30px 10px;
            background: #353637;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            margin-top: 20px;
        }
    }
`;

export const Button = styled.button`
    background-color: #1FDF6F;
    color: #2d2d2d;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 10px 60px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        transition: ease-in-out 500ms;
        background-color: #2D2D2D;
        color: #1FDF6F;
    }
`;

export const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: ${props => `${props.fontSize}px`};
`;