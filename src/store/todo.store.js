const initialState = { todoList: [], showDetails: null, details: {} };

export default(state=initialState, action) => {
  switch (action.type) {
    case 'ADD':
      // return state;
      return { ...state, todoList: [...state.todoList, action.payload] };
    case 'DELETE':
        // return state;
      return {...state, todoList: state.todoList.filter( item => item._id !== action.payload )};
    case 'TOGGLE':
        // return state;
      return { ...state, todoList: state.todoList.map( (item) => item._id === action.payload ? {...item, complete: !item.complete} : item ) };
    case 'DETAILS':
        // return state;
      let item = state.todoList.filter( item => item._id === action.payload )[0] || {}
      return { ...state, showDetails: !state.showDetails, details: item };
    default:
      return state;
      // throw new Error();
  }
}

export const add = (newName) => {
  return ({type:'ADD', payload:newName})
};

export const remove = () => {
  return ({type:'DELETE'})
};

export const toggle = () => {
  return ({type:'TOGGLE'})
};

export const details = () => {
  return ({type:'DETAILS'})
};