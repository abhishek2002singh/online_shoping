import {configureStore} from '@reduxjs/toolkit'
import cardReducer from './cardSlice'
import orderReducer  from './placeErderSlice'
import searchReducer  from './searchSlice'



const appStore = configureStore({
    reducer :{
         card: cardReducer,
         order: orderReducer,
         cardSearch: searchReducer,
        //  user :useReducer
    },

});

export default appStore