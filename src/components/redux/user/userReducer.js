import { FETECH_USER_FAILURE, FETECH_USER_REQUEST, FETECH_USER_SUCCESS } from "./userType"


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETECH_USER_REQUEST: return {
            ...state,
            loading: true
        }
        case FETECH_USER_SUCCESS: return {
            loading: false,
            users: action.payload,
            error: ''
        }
        case FETECH_USER_FAILURE: return {
            loading: false,
            users: [],
            error: action.payload
        }
        default: return state
    }
}

export default reducer