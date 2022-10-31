

export interface IStage {
  id: number;
  duration: number;
  isSelect: boolean;
  stageTitle: string;
  progressPercent: number;
  budget?: number;
}

export interface ITaskInfo {
  taskTitle: string;
  expenses: number;
  investments: number;
  firm: number;
  profit: number;
  isActiveFirm: boolean;
  period: any[];
}

export interface ITask {
  taskId: number;
  taskInfo: ITaskInfo;
  taskDuration: number,
  dates: string[];
  stages: IStage[];
}
