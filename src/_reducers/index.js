import { combineReducers } from 'redux';

import blogReducer from './blogReducer';
import CounterReducer from './counterReducer';

const reducer = combineReducers({
    BLOG: blogReducer,
    COUNTER: CounterReducer
}); 

export default reducer;