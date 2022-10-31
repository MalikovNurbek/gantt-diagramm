import {
  combineReducers,
  configureStore,
  // getDefaultMiddleware,
} from "@reduxjs/toolkit";
import TaskReducer from "./reducer/TaskSlice";
const rootReducer = combineReducers({
  TaskReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["task/createTask"],
          ignoredActionPaths: [
            "meta.arg",
            "payload.period.0",
            "payload.period.1",
          ],
          ignoredPaths: [
            "TaskReducer.data.2.taskInfo.period.0",
            "TaskReducer.data.2.taskInfo.period.1",
          ],
        },
      }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
