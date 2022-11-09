import React, { FC } from "react";
import { Progress } from "antd";
import ProgressInfoModal from "../ProgressInfoModal";
import { useAppDispatch } from "../../hooks/redux";
import { selectTaskStage } from "../../store/reducer/TaskSlice";
import { IStage } from "../../types/taskTypes";
import styles from "./taskProgress.module.css";

interface TaskProgressProps {
  stage: IStage;
  index: number;
}

const TaskProgress: FC<TaskProgressProps> = ({ stage, index }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { id, progressPercent, duration, isSelect } = stage;
  const dispatch = useAppDispatch();

  return (
    <>
      <ProgressInfoModal
        open={open}
        setOpen={setOpen}
        stage={stage}
      />

      <div
        className={index === 0 ? styles.firstBox : styles.box}
        onClick={() => dispatch(selectTaskStage(id))}
        style={{
          // top: `${index === 0 ? 0 : index * 60}px`,
          left: `${index * -36}px`,
        }}
      >
        <div
          style={{
            // left: `${startDay !== 1 && startDay * 50}px`,
            width: `${duration * 50 + 36}px`,
            maxWidth: `${duration * 50 + 36}px`,
          }}
          id={`${id}`}
          className={styles.block}
          onClick={() => setOpen(true)}
        >
          <Progress
            trailColor="#fff"
            strokeWidth={30}
            percent={progressPercent}
            strokeColor={isSelect ? "#2a80fb" : "#a6c7fa"}
          />
        </div>
      </div>
    </>
  );
};

export default TaskProgress;
