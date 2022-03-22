import { createStore } from 'redux'
import { UserToken } from '@/utils/cache'

const reducer = (prevState = {
    "islogin": UserToken.get() != '' ? true : false,
    "token": ''
}, action) => {
    const newState = { ...prevState };
    switch (action.type) {
        case "logOut":
            UserToken.remove()
            return newState;
        case "logIn":
            newState.token = action.token;
            UserToken.set(action.token)
            return newState;
        default:

            return prevState;
    }


}
const store = createStore(reducer);

export default store;
