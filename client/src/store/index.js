import { configureStore } from '@reduxjs/toolkit'
import {authReducer, categoryReducer, productsReducer} from "./reducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {

    auth: persistedAuthReducer,
    category: categoryReducer,
    product: productsReducer,

  },
})

export const persistor = persistStore(store);