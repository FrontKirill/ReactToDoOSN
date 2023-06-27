import React from 'react';
import {TaskWrapper, TaskText} from "./Task.styles";
import {ButtonDeleteStyled} from "../UI/ButtonDelete/ButtonDelete.styles";
import {StyledCheckBox} from "../UI/Checkbox/CheckBox.styles";


const Task = ({task, remove, toggleComplete, handleChange}) => {

    return (
        <TaskWrapper>
            <TaskText onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.text}</TaskText>
            <ButtonDeleteStyled onClick={() => remove(task.id)}>Удалить</ButtonDeleteStyled>
            <StyledCheckBox type="checkbox" checked={task.completed} onChange={() => handleChange(task.id)}/>
            <ul style={{ listStyleType: "none"}}>
                <li>Дата: {task.date.getDate()}:{task.date.getMonth()}:{task.date.getFullYear()}</li>
                <li>Время: {task.date.getHours()}:{task.date.getMinutes()}:{task.date.getSeconds()}</li>
            </ul>
        </TaskWrapper>
    );
};



export default Task;