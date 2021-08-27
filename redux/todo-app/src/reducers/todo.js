const initialState = {
    list: [],
    activeId: null,
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList,
            };

        case 'SET_ACTIVE':
            return {
                ...state,
                activeId: action.payload.id,
            };

        default:
            return state;
    }
};

export default todoReducer;
