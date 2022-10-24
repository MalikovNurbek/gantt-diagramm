import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./reducer/TaskSlice";
const rootReducer = combineReducers({
  TaskReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']