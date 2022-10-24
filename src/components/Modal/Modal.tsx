import React from "react";
import { Button, Modal } from "antd";
import { useAppDispatch } from "../../hooks/redux";

import "antd/dist/antd.css";


const DataModal = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        title="Данные проекта"
        centered
        open={open}
        // onOk={handleClick}
        onCancel={() => setOpen(false)}
        width={400}
      >
        
      </Modal>
    </>
  );
};
export default DataModal;
