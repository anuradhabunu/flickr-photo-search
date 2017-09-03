import {combineReducers} from 'redux';
import ImageReducer from './images';

const allReducers = combineReducers({
	images: ImageReducer
});
export default allReducers;