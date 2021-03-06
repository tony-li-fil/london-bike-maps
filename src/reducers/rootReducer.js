import { combineReducers } from 'redux';
import bikeStationReducer from './bikeStationReducer';
import mapReducer from './mapReducer';
import zoomReducer from './zoomReducer';
import filterReducer from './filterReducer';
import searchReducer from './searchReducer';
import nearbyStationReducer from './nearbyStationReducer'

export default combineReducers({
    bikeStationReducer,
    mapReducer,
    zoomReducer,
    filterReducer,
    searchReducer,
    nearbyStationReducer
})