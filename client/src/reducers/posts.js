//state is basically posts

export default (state = [], action) => {
    switch(action.type) {
        case 'LIKEPOST' :
            return state.map((post) => post._id === action.payload._id ? action.payload : post)
        case 'DELETE' : 
            return state.filter((post) => post._id !== action.payload);
        case 'UPDATE' : 
            return state.map((post) => post._id === action.payload._id ? action.payload : post)
        case 'FETCH_ALL' :
            return action.payload;
        case 'CREATE':
            return [ ...state, action.payload];
        default:
            return state        
    }
}