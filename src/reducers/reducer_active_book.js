// state is not application state. only state this reducer is responsible for
export default function(state = null, action) { //handles the initial state
  switch (action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
};