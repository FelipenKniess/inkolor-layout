﻿import styled, { css } from 'styled-components';

export const Container = styled.div`
    background: #FFF;
    display:flex;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    color: #000;
    border: 1px solid #FFF;

    ${(props) => props.isErrored &&
        css`
            border-color: #c53030;
        `
    }
    > svg {
        margin-right: 16px;
        ${(props) => props.isFilled &&
            css`
                color: #000;
            `
        }
    }
    ${(props) => props.isFocused &&
        css`
            border-color: #000;
            color: #000;
        `
    }
    input {
        flex: 1;
        background: transparent;
        color: #000;
        border: 0;
        &::placeholder {
            color: #666360;
        }
    }
`

export const Error = styled.div`
    height: 20px;
    color: #c53030;
    span {
        background: #c53030;
        color: #fff;
        &::before {
            border-color: #c53030 transparent;
        }
  }
`
export const MessageError = styled.span`
    color: #c53030;
    display: block;
    margin-bottom: 10px;
`