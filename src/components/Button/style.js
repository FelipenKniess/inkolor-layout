import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    justify-content: space-around;
    background: red;
    background: #EC008C;
    color: #FFF;
    font-weight: bold;
    font-size: 14px;
    align-items: center;
    padding: 10px;
    border-radius: 30px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height:42px;
        background: #FFF;
        border-radius: 20px;
        margin-right: 25px;
    }
    svg {
        color: #EC008C;
        width: 18px;
        height: 18px;
    }
`