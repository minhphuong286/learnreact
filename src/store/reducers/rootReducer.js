const initState = {
    users: [
        { id: 1, name: 'redux1' },
        {id: 2, name: 'redux2'}
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('run in reducer: ', action);
            // let users = state.users;
            let {users} = state
            users = users.filter(item => item.id !== action.payload.id)

            return {...state, users}
        case 'CREATE_USER':
            let id_rd = Math.floor(Math.random() * 10000)
            let user = { id: id_rd, name: `Random - ${id_rd}` }
            return {
                ...state, 
                users: [...state.users, user]
            }
            
        default:
            return state;
    }
    // return state;
}

export default rootReducer;