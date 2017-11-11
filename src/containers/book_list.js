//book-list.js
//renders a list of books
import React, {Component} from 'react'
import { connect } from 'react-redux'


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) =>  {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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

export default connect(mapStateToProps)(BookList);