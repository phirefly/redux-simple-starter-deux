import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return (
        <div>
          Please select a book...
        </div>
      )
    }

    return (
    <div>
      <h3>{this.props.book.title}</h3>
      <p>Pages: { this.props.book.pages }</p>

    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook //references activeBook in rootReducer which references the ActiveBook reducer
  };
}

export default connect(mapStateToProps)(BookDetail)