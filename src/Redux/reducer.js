export default function reducer(state = {}, action) {
    switch (action.type) {
      case 'SET_DATA':
        return state
      case 'GET_DATA':
        return action.payload
      default:
        return state;
    }
  }