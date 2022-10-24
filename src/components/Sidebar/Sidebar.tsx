import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';
import styles from './sidebar.module.css'

const Sidebar: FC = () => {

  const { tasks } = useAppSelector(state => state.TaskReducer)

  return (
    <div className={styles.container}>
      <div className={styles.taskHeader}>
        <h2>"Название Проекта"</h2>
      </div>

      <div className={styles.taskBody}>
        <ol>
          {
            tasks.map(({id, taskTitle}) => (
              <li key={id} >{taskTitle}</li>
            ))
          }
        </ol>
      </div>
    </div>
  );
};

export default Sidebar;