const initialState = {
    user: {
        username: '',
        id: '',
        user_image: ''

    }
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        default:
            return state;
    }
}