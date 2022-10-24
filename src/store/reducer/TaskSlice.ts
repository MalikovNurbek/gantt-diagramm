import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { ITask } from "../../types/taskTypes";

const dateB = moment("11-11-2022");

interface TaskStateTypes {
  tasks: ITask[];
  format: string;
  startDate: moment.Moment;
  endDate: moment.Moment;
  duration: number[];
}

const initialState: TaskStateTypes = {
  tasks: [
    {
      id: 1,
      startDate: 1,
      duration: 4,
      isSelect: false,
      progressPercent: 100,
      taskTitle: "Cобрание",
    },
    {
      id: 2,
      startDate: 4,
      duration: 3,
      isSelect: false,
      progressPercent: 70,
      taskTitle: "Распределение работы",
    },
    {
      id: 3,
      startDate: 7,
      duration: 7,
      isSelect: false,
      progressPercent: 50,
      taskTitle: "Создание дизайна",
    },
    {
      id: 4,
      startDate: 14,
      duration: 10,
      isSelect: false,
      progressPercent: 10,
      taskTitle: "Проверка проекта",
    },
  ],
  format: "DD.MM.YYYY",
  endDate: dateB,
  startDate: dateB,
  duration: [],
};

export const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    selectTask(state, action: PayloadAction<string>) {
      state.startDate = moment(action.payload);
    },
    
  },
});

export const {  } = TaskSlice.actions;

export default TaskSlice.reducer;
