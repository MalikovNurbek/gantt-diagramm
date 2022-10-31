import { Button, Modal } from "antd";
import React, { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { ITask } from "../../types/taskTypes";

interface LineModalProps {
    isActive: boolean;
    setIsActive: (state: boolean) => void;
}

const LineModal: FC<LineModalProps> = ({ isActive, setIsActive }) => {
    const { data, currentTaskId } = useAppSelector(state => state.TaskReducer);
    const [currentData, setCurrentData] = React.useState<ITask>(
        data[currentTaskId]
    );
    const { investments, expenses, profit, firm } = currentData.taskInfo

    React.useEffect(() => {
        setCurrentData(data[currentTaskId]);
    }, [currentTaskId, data]);

    return (
        <Modal
            title='Информация о тендере'
            open={isActive}
            onOk={() => setIsActive(false)}
            centered
            footer={
                <>
                    <Button onClick={() => setIsActive(false)} type="default">
                        Закрыть
                    </Button>
                </>
            }
            onCancel={() => setIsActive(false)}
            width={500}
        >
            <span>Инвестиции: {investments}</span> <br />
            <span>От фирмы: {firm}</span>
            <br />
            <span>Затраты: {expenses}</span>
            <br />
            <span>Маржа: {profit}</span> <br />
        </Modal>
    );
};

export default LineModal;
