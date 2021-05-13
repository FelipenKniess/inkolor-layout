import React, { InputHTMLAttributes, useEffect, useRef, useCallback, useState} from 'react';
import { Container, Error, MessageError} from './styles';
import {FiAlertCircle} from 'react-icons/fi';
import { useField } from '@unform/core';

const Input = ({name, ...rest}) => {
   const inputRef = useRef(null);

   const [isFilled, setIsFilled] = useState(false);
   const [isFocused, setIsFocused] = useState(false);
   const { fieldName, defaultValue, error, registerField } = useField(name);

   useEffect(() => {
       registerField({
           name: fieldName,
           ref: inputRef.current,
           path: 'value'
       })
   }, [fieldName, registerField]);

   const handleInputFocus = useCallback(() => {
       setIsFocused(true);
   }, []);

   const handleInputBlur = useCallback(() => {
       setIsFocused(false);
       setIsFilled(!!inputRef.current?.value);
   }, []);

    return(
    <>
       <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
           <input
               onFocus={handleInputFocus}
               onBlur={handleInputBlur}
               defaultValue={defaultValue}
               ref={inputRef}
               {...rest}
           />
           {error && (
               <Error>
                   <FiAlertCircle size={20} />
               </Error>
           )}
       </Container>
       {error && <MessageError>{error}</MessageError>}
    </>
    )
}

export default Input;