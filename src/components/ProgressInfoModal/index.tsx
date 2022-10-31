import React, { FC } from "react";
import moment from "moment";
import { Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { removeStageFromTaskByID } from "../../store/reducer/TaskSlice";
import "antd/dist/antd.css";
import { IStage } from "../../types/taskTypes";

interface InfoModalProps {
  id: number;
  open: boolean;
  stage: IStage;
  setOpen: (state: boolean) => void;
}

const confirm = (deleteStage: () => void) => {
  Modal.confirm({
    centered: true,
    title: "Подтвердите действие",
    icon: <ExclamationCircleOutlined />,
    content: "Вы точно хотите удалить данный этап?",
    okText: "Удалить",
    cancelText: "Отмена",
    onOk: deleteStage
  });
};

const ProgressInfoModal: FC<InfoModalProps> = ({
  id,
  stage,
  open,
  setOpen,
}) => {
  const dispatch = useAppDispatch();
  const { data, currentTaskId } = useAppSelector(state => state.TaskReducer)
  const { stageTitle, duration, budget } = stage
  const { taskTitle, period, investments, firm, expenses, isActiveFirm, profit } = data[currentTaskId].taskInfo;
  const format = 'DD.MM.YYYY'
  const startDate = moment(period[0]);
  const endDate = moment(period[1]);
  const taskDuration = Math.abs(startDate.diff(endDate, 'days'))
  const onDelete = () => {
    dispatch(removeStageFromTaskByID(id));
    setOpen(false);
  };
  
  return (

      <Modal
        title={stageTitle}
        open={open}
        onOk={() => setOpen(false)}
        centered
        footer={
          <>
            <Button type="primary" onClick={() => confirm(onDelete)} danger>
              Удалить Этап
            </Button>
            <Button onClick={() => setOpen(false)} type="default">
              Закрыть
            </Button>
          </>
        }
        onCancel={() => setOpen(false)}
        width={500}
      >
        <h3>Бюджет этапа: {budget}</h3>
        <h4>
          {`Длительность этапа: ${duration} ${
            duration === 1
              ? "день"
              : duration === 2 || duration === 3 || duration === 4
              ? "дня"
              : "дней"
          }`}
        </h4>
        <br /> <br />
        <span>Тендер: {taskTitle}</span> <br />
        <div>
          <span>Дата начала: {startDate.format(format)}</span>
          <br />
          <span>Дата окончания: {endDate.format(format)}</span>
          <br />
          <span>
            {`Длительность: ${taskDuration} ${
              taskDuration === 1
                ? "день"
                : taskDuration === 2 || taskDuration === 3 || taskDuration === 4
                ? "дня"
                : "дней"
            }`}
          </span>
        </div>
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
  );
};
export default ProgressInfoModal;
