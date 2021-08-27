//state
//reducer
//store
console.log(window.Redux);
const { createStore } = window.Redux;

const initialState = ['Launch dry'];
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newList = [...state];
            newList.push(action.payload);
            return newList;

        default:
            return state;
    }
};

const store = createStore(todoReducer);

// Render redux todo list

const renderTodoList = (todoList) => {
    if (!Array.isArray(todoList) || todoList.length === 0) return;

    const todoElement = document.getElementById('todoListId');
    if (!todoElement) return;

    todoElement.innerHTML = '';

    todoList.forEach((todo) => {
        const liElement = document.createElement('li');
        liElement.textContent = todo;

        todoElement.appendChild(liElement);
    });
};

const initialTodoList = store.getState();
renderTodoList(initialTodoList);

const todoFormElement = document.getElementById('todoFormId');
if (todoFormElement) {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const todoInputElement = document.getElementById('todoId');
        if (!todoInputElement) return;
        const action = {
            type: 'ADD_TODO',
            payload: todoInputElement.value,
        };

        todoInputElement.value = '';

        store.dispatch(action);
    };

    todoFormElement.addEventListener('submit', handleFormSubmit);
}

store.subscribe(() => {
    console.log('STATE UPDATE', store.getState());
    renderTodoList(store.getState());
});
