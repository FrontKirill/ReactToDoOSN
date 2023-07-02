import React, {useState, useEffect} from 'react';
import {ListWrapper, TasksList} from './List.styles';
import Input from "../UI/Input/Input";
import Task from "../Task/Task";
import {nanoid} from "nanoid";
import {ButtonAddStyled} from "../UI/ButtonAdd/ButtonAdd.styles";
import SelectSort from "../UI/Select/SelectSort";



export const List = () => {
    const storedItems = JSON.parse(localStorage.getItem('tasks'))
    const [tasks, setTasks] = useState(storedItems);
    const [taskDescription, setTaskDescription] = useState('');
    const [selectedSort, setSelectedSort] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTodo = todo => {
        const id = nanoid();
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();
        const newTask = {id, text: taskDescription, completed: false, date, time};
        setTasks((prev) => [...prev,newTask]);
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

    const sortTasks = (sort) => {
        setSelectedSort(sort);
        setTasks([...tasks].sort((a, b) => a[sort].localeCompare(b[sort])));
    }

    return (
        <ListWrapper>
            <Input onChange={setTaskDescription} onKeyDown={addTodo} />
            <ButtonAddStyled onClick={addTodo}>
                Добавить
            </ButtonAddStyled>
            <hr style={{margin: "10px"}}/>
            <SelectSort
                value={selectedSort}
                onChange={sortTasks}
                defaultOption={"Сортировка по: "}
                options={[
                    {value: 'text', name: 'По названию'}
                ]}
            />
            {tasks.length
                ?
                <TasksList >
                    {tasks.map((item) => (
                        <Task
                            task={item}
                            key={item.id}
                            remove={removeTask}
                            toggleComplete={toggleComplete}
                            handleChange={handleChange}
                            date={item.date}
                            time={item.time}
                        />
                    ))}
                </TasksList>
                :
                <h1 style={{textAlign: "center"}}>Таски не найдены!</h1>
            }
        </ListWrapper>
    );
};
