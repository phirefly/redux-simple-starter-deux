//book-list.js
//renders a list of books
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectABook } from '../actions/index'
import { bindActionCreators } from 'redux'


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) =>  {
      return (
        <li onClick={ () => this.props.selectBook(book) }
            key={book.title}
            className="list-group-item">{book.title}
        </li>
        )
    })
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}

//Take our application state as an argument (state contains books and active book)
function mapStateToProps(state) {
  //whatever is returned from this will be available as 'this.props'
  return{
    books: state.books //our Books reducer is returning the books property, array of objects; available as this.props.books
  };
}
// Anything returned form this function will end up as props on the BookList container
// e.g. you will be able to call 'this.props.selectBook'
function mapDispatchToProps(dispatch) {
  // When selectBook is called, pass the result to all reducers within the application
  return bindActionCreators({ selectBook: selectABook}, dispatch);
}

// Promote BookList from a component to a container. It needs to know about the new 'selectBook' dispatch method. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

