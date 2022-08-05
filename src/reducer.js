import * as actions from "./actionTypes";

let lastID = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastID,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map(bug =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
