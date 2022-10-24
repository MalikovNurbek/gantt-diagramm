import { Button } from "antd";
import React, { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import TaskProgress from "../Progress";
import styles from './diagram.module.css'

const Diagramm: FC = () => {
  const [days, setDays] = React.useState<number[]>([])
  const { tasks } = useAppSelector(state => state.TaskReducer)
  
  React.useEffect(() => {
    const numArr = []
    for (let i = 1; i <= 100; i++) {
      numArr.push(i)
    }
    setDays(numArr)
  }, [])

  // const showDistance = () => {
  // console.log(start.format(format));
  // console.log(end.format(format));
  // console.log("Разница в ", +start.diff(end, "days"), "дней")
  // let duration = start.diff(end, 'days')
  // console.log();
  // for (let i = 1; i <= Math.abs(duration); i++) {
  //   setPeriod((p) => [...p, i]);
  // }
  // setPeriod(start.diff(end, "days"));
  // for (; start <= end; setStart(start.add(1, "day"))) {
  //   setPeriod((period) => [...period, start.format(format)]);
  //   console.log(typeof start.format(format));
  // }
  // period.length && console.log(period);
  // };
  return (
    <div className={styles.container}>
      <div className={styles.diagramHeader}>
        {days.map(day => (
          <Button type="primary" key={day} className={styles.dayBox}>{day}</Button>
        ))}
      </div>

      <div className={styles.diagramBody}>
          {tasks.map(task => (
            <TaskProgress key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default Diagramm;
