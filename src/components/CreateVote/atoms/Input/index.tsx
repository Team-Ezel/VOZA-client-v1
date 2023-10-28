import React from 'react';
import * as S from './style'

type InputProps = {
    PlaceholderText : string
}


const Input = ({PlaceholderText} : InputProps) => {
    return (
        <S.Input placeholder={PlaceholderText} />      
    );
};

export default Input;