import React from 'react';
import {Container} from './style';

const Button = ({children, ...props}) => {
    return(
        <Container type="button">
            <div>
                {props.icon()}
            </div>
            {children}
        </Container>
    )
}

export default Button;