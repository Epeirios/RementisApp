// The types of actions that you can dispatch to modify the state of the store
export const types = {
    ITEM_ADD: 'ITEM_ADD',
    ITEM_REMOVE: 'ITEM_REMOVE',
    ITEM_TOGGLE_CHECKED: 'ITEM_TOGGLE_CHECKED',
    ITEMS_REMOVE_COMPLETED: 'ITEMS_REMOVE_COMPLETED',
}

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
    itemAdd: (item) => {
        return { type: types.ITEM_ADD, payload: item }
    },
    itemRemove: (index) => {
        return { type: types.ITEM_REMOVE, payload: index }
    },
    itemToggleChecked: (index) => {
        return { type: types.ITEM_TOGGLE_CHECKED, payload: index }
    },
    itemsRemoveCompleted: () => {
        return { type: types.ITEMS_REMOVE_COMPLETED, payload: undefined }
    }
}