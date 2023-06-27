import React, {useState} from 'react';
import {StyledInput} from "./Input.styles";

const Input = ({onChange, onKeyDown}) => {
    const [value, setValue] = useState('')


    function clear()  {
        setValue('');
    }

    const keyDown = (e) => {
        if (e.code === "Enter" && value.trim() ) {
            onKeyDown(value.trim());
            clear()
        }
    }


    const change = (e) => {
        setValue(e.target.value)
        onChange(e.target.value)
    }


    return (

        <StyledInput
            type="text"
            value={value}
            onChange={change}
            onKeyDown={keyDown}
            placeholder="Название таски"
        />
    );
};

export default Input;