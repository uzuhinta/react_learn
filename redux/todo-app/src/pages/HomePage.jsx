import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from '../components/Home/TodoList';
import { addNewTodo, setActiveTodo } from '../actions/todo';

HomePage.propsType = {};

const randomNumber = () => {
    return 10000 + Math.trunc(Math.random() * 9000);
};

function HomePage(props) {
    const todoList = useSelector((state) => state.todo.list);
    const activeId = useSelector((state) => state.todo.activeId);
    const dispatch = useDispatch();

    const handleTodoClick = (todo) => {
        dispatch(setActiveTodo(todo));
    };
    const handleAddTodoClick = () => {
        const newTodo = {
            id: randomNumber(),
            title: 'Todo ' + randomNumber(),
        };

        dispatch(addNewTodo(newTodo));
    };

    return (
        <div>
            <h1>Redux hook</h1>
            <button onClick={handleAddTodoClick}>Add todo</button>
            <TodoList
                todoList={todoList}
                activeId={activeId}
                onTodoClick={handleTodoClick}
            />
        </div>
    );
}

export default HomePage;
