import { combineReducers } from 'redux';
import itemModuls from './itemModuls';
import popularItems from './popularItems';

const rootReducer = combineReducers({
    popularItems,  itemModuls
});

export default rootReducer;