import React, { FC } from "react";
import LineModal from "../LineModal";
import styles from "./line.module.css";

interface LineProps {
  isActive: boolean;
  position: number;
}

const Line: FC<LineProps> = ({ isActive, position }) => {
  const [isLineModalActive, setIsLineModalActive] = React.useState<boolean>(false)
  // const [position, setPosition] = React.useState<number>(100);

  // const handleDragEnd = (e: any) => {
  //   const parentContainer = e.target.parentNode.getBoundingClientRect();
  //   const result = e.clientX - parentContainer.left;

  //   if (result > 0) {
  //     setPosition(result);
  //   } else if (result >= parentContainer.width) {
  //     setPosition(parentContainer.width);
  //   } else {
  //     setPosition(0);
  //   }
  // };

  // React.useEffect(() => {
  //   if (!isActive) {
  //     setPosition(100)
  //   }
  // }, [isActive])

  return (
      <>
      <LineModal isActive={isLineModalActive} setIsActive={setIsLineModalActive} />
          <div
              // draggable
              onClick={() => setIsLineModalActive(true)}
              className={styles.line}
              style={{ left: position }}
              hidden={!isActive}
          ></div>
      </>
  );
};

export default Line;