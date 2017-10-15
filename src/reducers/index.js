import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

const rootReducer = combineReducers({
  //The purpose of this function is to output the mapping of our state, hence a combination of reducers
  books: BooksReducer

});

export default rootReducer;
