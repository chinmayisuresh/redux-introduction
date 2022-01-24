import {reducer} from '../features/reducers'
import { createStore } from 'redux'

export const store =createStore(reducer , window.__REDUX_DEVTOOLS_EXTENSION__());
