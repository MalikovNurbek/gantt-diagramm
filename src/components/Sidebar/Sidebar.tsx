import React, { FC } from "react";
import { Button } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import AddNewStageModal from "../AddNewStageModal";
import AddNewTenderModal from "../AddNewTenderModal";
import { useAppSelector } from "../../hooks/redux";
import styles from "./sidebar.module.css";
import TaskItem from "../TaskItem";

const Sidebar: FC = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = React.useState<boolean>(false);
  const [isStageModalOpen, setIsStageModalOpen] = React.useState<boolean>(false);
  const { data } = useAppSelector((state) => state.TaskReducer);

  return (
    <>
      <AddNewStageModal
        isModalOpen={isStageModalOpen}
        setIsModalOpen={setIsStageModalOpen}
      />
      <AddNewTenderModal
        isModalOpen={isTaskModalOpen}
        setIsModalOpen={setIsTaskModalOpen}
      />
      <div className={styles.container}>
        <div className={styles.containerBody}>
          {data.map((task, i) => (
            <TaskItem task={task} index={i} key={task.taskId}/>
          ))}
        </div>

        <ButtonGroup className={styles.containerFooter}>
          <Button
            block
            size="large"
            type="primary"
            onClick={() => setIsTaskModalOpen(true)}
          >
            Создать тендер
          </Button>
          <Button
            type="dashed"
            block
            size="large"
            onClick={() => setIsStageModalOpen(true)}
          >
            Создать этап
          </Button>
        </ButtonGroup>
      </div>
      {/* <Collapse
        defaultActiveKey={data[0].taskId}
        onChange={onChange}
        accordion
        className={styles.container}
      >
        {data.map(({ taskId, taskTitle, stages }) => (
          <Panel key={taskId} header={taskTitle} className={styles.panel}>
            <ol>
              {stages.map(({ id, stageTitle, isSelect }) => (
                <li
                  key={id}
                  className={
                    isSelect ? styles.selectedListItem : styles.listItem
                  }
                  onClick={() => dispatch(selectTaskStage(id))}
                >
                  <a href={`#${id}`}>{shortedText(stageTitle)}</a>
                </li>
              ))}
            </ol>
            <Button type="primary" onClick={openAddModal}>
              <PlusOutlined />
            </Button>
          </Panel>
        ))}
      </Collapse> */}
    </>
  );
};

export default Sidebar;
