
export function selectABook(book) {
  // Return an action from selectBook, which is an action creator
  // Must include an object with a 'type' property and sometimes a 'payload' property
  return {
    type: 'BOOK_SELECTED', // Temp hard coded. usually a var.
    payload: book
  };
}