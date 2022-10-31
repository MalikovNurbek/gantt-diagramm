import React, { FC } from "react";
import moment from "moment";
import { Button, Modal } from "antd";
import { ITask } from "../../types/taskTypes";

interface TaskInfoModalProps {
  task: ITask;
  isModalOpen: boolean;
  setIsModalOpen: (state: boolean) => void;
}

const TaskInfoModal: FC<TaskInfoModalProps> = ({
  task,
  isModalOpen,
  setIsModalOpen,
}) => {
  const {
    firm,
    profit,
    period,
    expenses,
    taskTitle,
    investments,
    isActiveFirm,
  } = task.taskInfo;

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Информация о тендере"
        centered
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={
          <Button onClick={handleClose} type="primary" size="large">
            Закрыть
          </Button>
        }
      >
        <span>Наименование тендера: {taskTitle}</span> <br />
        <div>
          <span>
            Дата начала: {moment(period[0]).format("DD.MM.YYYY")}
          </span>{" "}
          <br />
          <span>
            Дата окончания: {moment(period[1]).format("DD.MM.YYYY")}
          </span>
        </div>{" "}
        <br />
        <span>Инвестиции: {investments}</span> <br />
        <span>От фирмы: {firm}</span>
        <br />
        <span>Затраты: {expenses}</span>
        <br />
        <span>Маржа: {profit}</span> <br />
        <span>
          Активность компании: {isActiveFirm ? "Активная" : "Неактивная"}
        </span>
      </Modal>
    </>
  );
};

export default TaskInfoModal;
