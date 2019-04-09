import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 5
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export const counter = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case INCREMENT:
    console.log("+")
      return {
        ...state,
        count: state.count+1,

      }
    case DECREMENT:
    console.log("-")
      return {
        ...state,
        count: state.count-1,
      }
    default:
    console.log("default")
      return state;
  }
};

export default counter;