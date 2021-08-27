export const addNewTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo,
    };
};

export const setActiveTodo = (todo) => {
    return {
        type: 'SET_ACTIVE',
        payload: todo,
    };
};
