import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
TodoList.propsType = {
    todoList: PropTypes.array,
    activeId: PropTypes.number,
    onTodoClick: PropTypes.func,
};

TodoList.defaultValue = {
    todoList: [],
    activeId: null,
    onTodoClick: null,
};

function TodoList(props) {
    const { todoList, activeId, onTodoClick } = props;

    const handleClick = (todo) => {
        console.log(todo);
        console.log(activeId);
        if (onTodoClick) {
            onTodoClick(todo);
        }
    };

    return (
        <ul className="todo-list">
            {todoList.map((todo) => (
                <li
                    key={todo.id}
                    className={todo.id === activeId ? 'active' : ''}
                    onClick={() => handleClick(todo)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
