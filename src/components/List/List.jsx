import React, {useState} from 'react';
import {ListWrapper, TasksList} from './List.styles';
import Input from "../UI/Input/Input";
import Task from "../Task/Task";
import {nanoid} from "nanoid";
import {ButtonAddStyled} from "../UI/ButtonAdd/ButtonAdd.styles";



export const List = () => {
    const [tasks, setTasks] = useState([]);
    const [taskDescription, setTaskDescription] = useState('');

    const addTodo = todo => {
        const id = nanoid();
        const date = new Date();
        const newTask = {id, text: taskDescription, completed: false, date};
        setTasks((prev) => [...prev,newTask]);
        // console.log(date)
    }

    const removeTask = id => {
        setTasks(tasks.filter(todo => todo.id !== id))
    }

    const toggleComplete = id => {
        setTasks(tasks.map(task => task.id === id ?
            {...task, completed: !task.completed} :task
        ))
        // console.log(setTasks)
    }

    const handleChange = id => {
        setTasks(tasks.map(task => task.id === id ?
            {...task, completed: !task.completed} :task
        ))
    }


    return (
        <ListWrapper>
            <Input onChange={setTaskDescription} onKeyDown={addTodo} />
            <ButtonAddStyled onClick={addTodo}>
                Добавить
            </ButtonAddStyled>
            <div>
                <select>
                    <option value="value1">По названию</option>
                </select>
            </div>
            <TasksList>
                {tasks.map((item) => (
                    <Task
                        task={item}
                        key={item.id}
                        remove={removeTask}
                        toggleComplete={toggleComplete}
                        handleChange={handleChange}
                        date={item.date}
                    />
                ))}
            </TasksList>
        </ListWrapper>
    );
};
