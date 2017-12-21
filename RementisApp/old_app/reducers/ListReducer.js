import { types } from '../actions/ListActions'

// Initial state of the store
const initialState = {
    todos: [
        { text: 'item 1', checked: true },
        { text: 'item 2', checked: true },
        { text: 'item 3', checked: false },
        { text: 'item 4', checked: false },
    ]
}

// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.
export const reducer = (state = initialState, action) => {
    const { todos } = state;
    const { type, payload } = action;

    switch (type) {
        case types.ITEM_ADD: {
            return {
                ...state,
                todos: [{ text: payload, checked: false }, ...todos],
            }
        };
        case types.ITEM_REMOVE: {
            return {
                ...state,
                todos: todos.filter((todo, i) => i !== payload),
            }
        };
        case types.ITEM_TOGGLE_CHECKED: {
            return {
                ...state,
                todos: todos.map((todo, i) => {
                    const { text, checked } = todo;

                    if (i === payload) {
                        todo = { text: text, checked: !checked };
                    }
                    return todo;
                })
            }
        };
        case types.ITEMS_REMOVE_COMPLETED: {
            return {
                ...state,
                todos: todos.filter((todo) => todo.checked === true),
            }
        };
    }

    return state
}