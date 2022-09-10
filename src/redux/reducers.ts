import {combineReducers} from 'redux';
import homeReducer from '@/app/features/HomePage/reducer';
import slotReducer from '@/app/features/SlotPage/reducer';

export default combineReducers({
  test: homeReducer,
  slot: slotReducer,
});
