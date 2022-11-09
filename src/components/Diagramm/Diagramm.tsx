import React, { FC, MouseEvent, useEffect } from "react";
import { Button, Switch } from "antd";
import Line from "../Line/Line";
import TaskProgress from "../Progress";
import { useAppSelector } from "../../hooks/redux";
import styles from "./diagram.module.css";

interface DiagrammProps {
  isLineActive: boolean
}

const Diagramm: FC<DiagrammProps> = ({isLineActive}) => {
  const [linPosition, setLinePosition] = React.useState<number>(100);
  const [days, setDays] = React.useState<number[]>([]);
  const {data, currentTaskId} = useAppSelector(state => state.TaskReducer);


  const handleDblClick = (e: any) => {
    const element = e.target.getBoundingClientRect();
    if (element.width < 600) return;
    const x = e.clientX;
    setLinePosition(x - element.left);
  };

  const handleScroll = (e: any) => {
    console.log(e.target.clientHeight)

  }

  useEffect(() => {
    if (!isLineActive) {
      setLinePosition(100);
    }
  }, [isLineActive]);
  useEffect(() => {
    const numArr = [];
    for (let i = 1; i <= 30; i++) {
      numArr.push(i);
    }
    setDays(numArr);
  }, [currentTaskId, data]);

  return (
    <div className={styles.container}>
      <div className={styles.diagramm}>
        <div className={styles.diagrammHeader}>
          <div className={styles.diagrammDates}>
            {data[currentTaskId].dates.map(date => (
              <div className={styles.day} key={date}>
                <div>{date}</div>
              </div>
            ))}
          </div>

          <div className={styles.diagrammDays}>
            {days.map(day => (
              <Button
                key={day}
                className={styles.dayBox}
                disabled={day <= data[currentTaskId].taskDuration ? false : true}
              >
                {day}
              </Button>
            ))}
          </div>
        </div>

        <div className={styles.switch}>

        </div>
        <div
          className={styles.diagrammBody}
          onDoubleClick={handleDblClick}
        >
          <Line isActive={isLineActive} position={linPosition}/>

          <div className={styles.gridLayout}/>
          {data.map((task, i) => (
            <div className={styles.taskBox} style={{marginTop: i !== 0 ? '30px' : 0}} key={task.taskId}>
              {task.stages.map((stage, i) => (
                <TaskProgress key={stage.id} stage={stage} index={i}/>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diagramm;
