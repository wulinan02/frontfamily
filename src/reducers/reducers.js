import {combineReducers} from 'redux';
import Bi from './rbasicinfo';
import notice from './notice';
import par from './messparcel';
import parcel from './parcel';
import forum from './forum';
import share from './share';
import review from './review';
export default combineReducers({
	parcel,notice,par,Bi,forum,share,review
})