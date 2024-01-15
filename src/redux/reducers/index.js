const initialState = {
    liked: {
        content: [] // Array che contiene i preferiti
    }
}

const mainReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "ADD_TO_LIKED":
            return {
                ...state,   // Old state
                liked: {
                    ...state.liked, // Old properties
                    content: [...state.liked.content, action.payload]
                }
            }
        case "REMOVE_FROM_LIKED":
            return {
                ...state,
                liked: {
                    ...state.liked,
                    content: state.liked.content.filter((job, i) => i !== action.payload) 
                }
            }

        default:
            return state;
    }
}

export default mainReducer; 