import React, { FC } from "react";
import { Button, Switch } from "antd";
import Line from "../Line/Line";
import TaskProgress from "../Progress";
import { useAppSelector } from "../../hooks/redux";
import styles from "./diagram.module.css";

const Diagramm: FC = () => {
    const [isLineActive, setIsLineActive] = React.useState<boolean>(false);
    const [linPosition, setLinePosition] = React.useState<number>(100);
    const [days, setDays] = React.useState<number[]>([]);
    const { data, currentTaskId } = useAppSelector(state => state.TaskReducer);

    const handleDblClick = (e: any) => {
        const element = e.target.getBoundingClientRect();
        if (element.width < 600) return;
        const x = e.clientX;
        setLinePosition(x - element.left);
    };
    React.useEffect(() => {
        if (!isLineActive) {
            setLinePosition(100);
        }
    }, [isLineActive]);
    React.useEffect(() => {
        const numArr = [];
        for (let i = 1; i <= 30; i++) {
            numArr.push(i);
        }
        setDays(numArr);
    }, [currentTaskId, data]);

    return (
        <div className={styles.container}>
            <div className={styles.diagramm}>
                <div className={styles.diagrammDates}>
                    {data[currentTaskId].dates.map(date => (
                        <div className={styles.day}>
                            <div>{date}</div>
                        </div>
                    ))}
                </div>
                <div className={styles.diagrammHeader}>
                    {days.map(day => (
                        <Button
                            key={day}
                            className={styles.dayBox}
                            disabled={
                                day <= data[currentTaskId].taskDuration
                                    ? false
                                    : true
                            }
                        >
                            {day}
                        </Button>
                    ))}
                </div>

                <div className={styles.switch}>
                    <Switch
                        onChange={() => setIsLineActive(!isLineActive)}
                        checkedChildren="Линия"
                        checked={isLineActive}
                        unCheckedChildren="Линия"
                    />
                </div>
                <div
                    className={styles.diagrammBody}
                    onDoubleClick={handleDblClick}
                >
                    <Line isActive={isLineActive} position={linPosition} />

                    <div className={styles.gridLayout} />

                    {data[currentTaskId].stages?.map((stage, i) => (
                        <TaskProgress key={stage.id} stage={stage} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Diagramm;
