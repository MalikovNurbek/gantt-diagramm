import React, { FC } from "react";
import { Button, Collapse, Switch } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import AddNewStageModal from "../AddNewStageModal";
import AddNewTenderModal from "../AddNewTenderModal";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { shortedText } from "../../helpers";
import { selectTaskStage } from "../../store/reducer/TaskSlice";
import styles from "./sidebar.module.css";

const {Panel} = Collapse;

interface SidebarProps {
  setIsLineActive: (state: boolean) => void;
  isLineActive: boolean;
}

const Sidebar: FC<SidebarProps> = ({setIsLineActive, isLineActive}) => {
  const [isTaskModalOpen, setIsTaskModalOpen] = React.useState<boolean>(false);
  const [isStageModalOpen, setIsStageModalOpen] = React.useState<boolean>(false);
  const {data} = useAppSelector((state) => state.TaskReducer);
  const dispatch = useAppDispatch()

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
        <div className={styles.containerHeader}>
          <Switch
            onChange={() => setIsLineActive(!isLineActive)}
            checkedChildren="Линия"
            checked={isLineActive}
            unCheckedChildren="Линия"
          />
        </div>
        <Collapse
          defaultActiveKey={data[0].taskId}
          className={styles.accordion}
          accordion
        >
          {data.map(({taskId, taskInfo: {taskTitle}, stages}) => (
            <Panel key={taskId} header={taskTitle} className={styles.panel}>
              <ol>
                {stages.map(({id, stageTitle, isSelect}) => (
                  <li
                    key={id}
                    className={
                      isSelect ? styles.selectedListItem : styles.listItem
                    }
                    onClick={() => dispatch(selectTaskStage(id))}
                  >
                    {shortedText(stageTitle)}
                  </li>
                ))}
              </ol>
            </Panel>
          ))}

        </Collapse>
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
    </>
  );
};

export default Sidebar;
