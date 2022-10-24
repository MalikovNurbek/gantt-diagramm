import React, { FC } from "react";
import { Progress } from "antd";
import styles from "./taskProgress.module.css";
import { ITask } from "../../types/taskTypes";

interface TaskProgressProps {
  task: ITask;
}

const TaskProgress: FC<TaskProgressProps> = ({ task }) => {
  const { progressPercent, startDate, duration } = task;
  return (
    <div
      className={styles.box}
      style={
        {
          // left: `${startDate !== 1 && startDate * 50}px`,
        }
      }
    >
      <Progress
        style={{
          left: `${startDate !== 1 && startDate * 50}px`,
          width: `${duration * 50 + 36}px`,
          maxWidth: `${duration * 50 + 36}px`,
        }}
        percent={progressPercent}
        strokeWidth={30}
      />
    </div>
  );
};

export default TaskProgress;
