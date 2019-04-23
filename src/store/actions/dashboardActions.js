export const getCards = () => {

    return (dispatch, getState) => {
      // make async call to database
      fetch('http://localhost:3000/api/getCards')
        // We get the API response and receive data in JSON format...
        .then(response => response.json())
        // ...then we update the users state
        .then( data => {
            console.log('data ', data)
            dispatch({ type: 'GET_CARDS', cards : data.cards});
        });
    }

};