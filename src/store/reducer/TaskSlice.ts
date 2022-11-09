import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStage } from "./../../types/taskTypes";
import { ITask } from "../../types/taskTypes";
import { getRandomId } from "../../helpers";

interface TaskStateTypes {
  data: ITask[];
  currentTaskId: number;
}

const initialState: TaskStateTypes = {
  data: [
    {
      taskId: 1,
      taskDuration: 24,
      dates: [
          "06.10.2022",
          "07.10.2022",
          "08.10.2022",
          "09.10.2022",
          "10.10.2022",
          "11.10.2022",
          "12.10.2022",
          "13.10.2022",
          "14.10.2022",
          "15.10.2022",
          "16.10.2022",
          "17.10.2022",
          "18.10.2022",
          "19.10.2022",
          "20.10.2022",
          "21.10.2022",
          "22.10.2022",
          "23.10.2022",
          "25.10.2022",
          "26.10.2022",
          "27.10.2022",
          "28.10.2022",
          "29.10.2022",
          "30.10.2022",
          "31.10.2022",
          "01.11.2022",
          "02.11.2022",
          "03.11.2022",
          "04.11.2022",
          "05.11.2022",
      ],
      taskInfo: {
          taskTitle: "Название тендера №1",
          expenses: 80000,
          investments: 50000,
          firm: 30000,
          profit: 0,
          isActiveFirm: true,
          period: []
      },
      stages: [
          {
              id: 3,
              duration: 4,
              isSelect: false,
              progressPercent: 100,
              stageTitle: "Cобрание",
              budget: 100000
          },
          {
              id: 4,
              duration: 3,
              isSelect: false,
              progressPercent: 70,
              stageTitle: "Распределение работы",
              budget: 100000
          },
          {
              id: 5,
              duration: 7,
              isSelect: false,
              progressPercent: 50,
              stageTitle: "Создание дизайна",
              budget: 100000
          },
          {
              id: 6,
              duration: 10,
              isSelect: false,
              progressPercent: 10,
              stageTitle: "Проверка проекта",
              budget: 100000
          }
      ]
    },
    {
      taskId: 120,
      taskDuration: 24,
      dates: [
          "06.10.2022",
          "07.10.2022",
          "08.10.2022",
          "09.10.2022",
          "10.10.2022",
          "11.10.2022",
          "12.10.2022",
          "13.10.2022",
          "14.10.2022",
          "15.10.2022",
          "16.10.2022",
          "17.10.2022",
          "18.10.2022",
          "19.10.2022",
          "20.10.2022",
          "21.10.2022",
          "22.10.2022",
          "23.10.2022",
          "25.10.2022",
          "26.10.2022",
          "27.10.2022",
          "28.10.2022",
          "29.10.2022",
          "30.10.2022",
          "31.10.2022",
          "01.11.2022",
          "02.11.2022",
          "03.11.2022",
          "04.11.2022",
          "05.11.2022",
      ],
      taskInfo: {
          taskTitle: "Второй тендер",
          expenses: 80000,
          investments: 50000,
          firm: 30000,
          profit: 0,
          isActiveFirm: true,
          period: []
      },
      stages: [
          {
              id: 31,
              duration: 6,
              isSelect: false,
              progressPercent: 100,
              stageTitle: "Cобрание",
              budget: 100000
          },
          {
              id: 41,
              duration: 3,
              isSelect: false,
              progressPercent: 70,
              stageTitle: "Распределение работы",
              budget: 100000
          },
          {
              id: 51,
              duration: 2,
              isSelect: false,
              progressPercent: 50,
              stageTitle: "Создание дизайна",
              budget: 100000
          },
          {
              id: 52,
              duration: 4,
              isSelect: false,
              progressPercent: 10,
              stageTitle: "Проверка проекта",
              budget: 100000
          }
      ]
    },
      // {
      //   taskId: 2,
      //   taskInfo: {
      //     taskTitle: "Название тендера №2",
      //     expenses: 150000,
      //     investments: 100000,
      //     firm: 100000,
      //     profit: 50000,
      //     isActiveFirm: true,
      //     period: [],
      //   },
      //   stages: [
      //     {
      //       id: 7,
      //       duration: 2,
      //       isSelect: false,
      //       progressPercent: 50,
      //       stageTitle: "zxcvzxcvz",
      //         budget: 100000,
      //     },
      //     {
      //       id: 8,
      //       duration: 5,
      //       isSelect: false,
      //       progressPercent: 70,
      //       stageTitle: "Распределение работы",
      //         budget: 100000,
      //     },
      //     {
      //       id: 9,
      //       duration: 4,
      //       isSelect: false,
      //       progressPercent: 50,
      //       stageTitle: "Создание дизайна",
      //         budget: 100000,
      //     },
      //     {
      //       id: 10,
      //       duration: 8,
      //       isSelect: false,
      //       progressPercent: 10,
      //       stageTitle: "Проверка проекта",
      //         budget: 100000,
      //     },
      //     {
      //       id: 11,
      //       duration: 10,
      //       isSelect: false,
      //       progressPercent: 100,
      //       stageTitle: "End",
      //         budget: 100000,
      //     },
      //     {
      //       id: 12,
      //       duration: 15,
      //       isSelect: false,
      //       progressPercent: 75,
      //       stageTitle: "End",
      //       budget: 100000,
      //     },
      //   ],
      // },
  ],
    currentTaskId: 0
};

export const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<ITask>) => {
      const randomId = getRandomId();
      const { dates, taskDuration, taskInfo} = action.payload
      
      const newTender: ITask = {
        taskId: randomId,
        dates,
        stages: [],
        taskDuration: taskDuration + 1,
        taskInfo: {
          ...taskInfo,
          profit: taskInfo.investments + taskInfo.firm - taskInfo.expenses
        },
      };
      state.data.push(newTender);
    },
    selectTask: (state, action: PayloadAction<number>) => {
      state.currentTaskId = state.data.findIndex(
        (item) => item.taskId === action.payload
      );
    },
    selectTaskStage: (state, action: PayloadAction<number>) => {
      state.data.map((task) => {
        return task.stages?.map((stage) =>
          stage.id === action.payload
            ? (stage.isSelect = true)
            : (stage.isSelect = false)
        );
      });
    },
    addStageToTaskByID: (state, action: PayloadAction<IStage>) => {
      const {stageTitle, budget, duration } = action.payload
      const randomId = getRandomId();
      const newStage: IStage = {
        id: randomId,
        stageTitle,
        budget: budget && budget, 
        isSelect: false,
        duration,
        progressPercent: 0,
      };

      state.data[state.currentTaskId].stages?.push(newStage);
    },
    removeStageFromTaskByID: (state, action: PayloadAction<number>) => {
      state.data[state.currentTaskId].stages = state.data[
        state.currentTaskId
      ].stages.filter((stage) => stage.id !== action.payload);
    },
  },
});

export const {
  createTask,
  selectTask,
  selectTaskStage,
  addStageToTaskByID,
  removeStageFromTaskByID,
} = TaskSlice.actions;

export default TaskSlice.reducer;
