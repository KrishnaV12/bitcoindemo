import { ACOUNT_INFO } from "../actions/userAction";

const initialStateValue = {}

const userReducer = (state = initialStateValue, action) => {

    switch(action.type) {
        case ACOUNT_INFO:{
            return action.payload
        }
        default:{
            return state
        }
    }
}

export default userReducer