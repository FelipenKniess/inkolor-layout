import React from 'react'
import {Container} from './style';

const IconContainer = ({children}) => {
    return(
        <Container>
            <div>
                {children}
            </div>
        </Container>
    )
}

export default IconContainer;