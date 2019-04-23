export const signIn = (credentials) => {
    return (dispatch, getState) => {

        console.log('credentials',credentials);

        fetch('http://localhost:3000/auth/login', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials)
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            dispatch({ type: 'LOGIN_SUCCESS', data : data });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
}

  