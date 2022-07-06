import { combineReducers } from 'redux';

import blogReducer from './blogReducer';
import CounterReducer from './counterReducer';

const reducer = combineReducers({
    blog: blogReducer,
    counter: CounterReducer
}); 

export default reducer;