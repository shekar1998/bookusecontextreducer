
const BookReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'REMOVE_BOOK':
      console.log(state, action);
      
        return { ...state, book: action.payload };

    case 'ADD_BOOK':
      console.log(state, action);
      console.log('Adding');
      return {
        ...state,
        book: [...state.book, action.book],
      };

    case 'BOOK_DETAILS':
      console.log(state, action);
      return { ...state, book: action.payload };
    case 'All_BOOKS':
      console.log('executing');

      return state;

    case 'USER_SIGNUP':
      console.log(state, action);
        return { ...state, message: action.payload
     };

    case 'USER_LOGIN':

    return { ...state, authenticate: action.payload.authenticate, token: action.payload.token, message: action.payload.message  };
      
  }
};

export default BookReducer;
