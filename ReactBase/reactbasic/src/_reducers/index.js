import { combineReducers } from "redux"; // reducer 가 여러가지가 있을 수 있다. combineReducer를 이용해서 root에서 하나로 모아주는거지.
// import user from './user_reducer';
// import comment form ~ 이런식으로 더 있으면 아래랑 같이 늘어나는거지, 기능에 따라서.


const rootReducer = combineReducers9({
    // user
    // comment
})

export default rootReducer;