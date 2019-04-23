const initState = {
   authError: null,
   token: null
}
  
const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
        console.log('login error');
        return {
            ...state,
            authError: 'Login failed'
        }

        case 'LOGIN_SUCCESS':
        console.log('login success',action.data.token);
        return {
            ...state,
            token: action.data.token,
            authError: null
        }

        case 'SIGNOUT_SUCCESS':
        console.log('signout success');
        return state;

        default:
        return state
    }
};
  
export default authReducer;
  