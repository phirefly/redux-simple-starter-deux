import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    return (
    <div>
      Book Details for:
      {this.props.book.title}
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