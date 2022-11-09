import React, { FC } from "react";
import { Collapse, Dropdown, Menu } from "antd";
import TaskInfoModal from "../TaskInfoModal";
import { selectTask } from "../../store/reducer/TaskSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ITask } from "../../types/taskTypes";
import styles from "./taskItem.module.css";

const { Panel } = Collapse;


interface TaskItemProps {
  task: ITask;
  index: number;
}

const TaskItem: FC<TaskItemProps> = ({ task, index }) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const { currentTaskId } = useAppSelector((state) => state.TaskReducer);
  const dispatch = useAppDispatch();

  const menu = (
    <Menu
      items={[{
          label: `Информация ${index}`,
          key: "1",
          onClick: () => {setIsModalOpen(true)}
        },]}
    />
  );

  return (
    <>
    <TaskInfoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} task={task}/>
      <div
        key={task.taskId}
        className={index === currentTaskId ? styles.activePanel : styles.panel}
        onClick={() => dispatch(selectTask(task.taskId))}
      >
        <div>{task.taskInfo.taskTitle}</div>
        <Dropdown.Button
          overlay={menu}
          type="primary"
          // icon={<MoreOutlined />}
        ></Dropdown.Button>
      </div>
    </>
  );
};

export default TaskItem;
