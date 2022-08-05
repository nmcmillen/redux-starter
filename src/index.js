import store from "./store";
import { bugAdded, bugResolved } from "./actions";
// import * as actions from "./actionTypes";

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));


// const unsubscribe = store.subscribe(() => {
//     console.log("Store changed!", store.getState())
// })

// store.dispatch({
//     type: actions.BUG_ADDED,
//     payload: {
//         description: "Bug 1"
//     }
// })

// store.dispatch({
//     type: actions.BUG_ADDED,
//     payload: {
//         description: "Bug 2"
//     }
// })

// unsubscribe();

// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// })


console.log(store.getState());