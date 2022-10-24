import React, { ChangeEvent } from "react";
import moment from "moment";
import { Button, Form, DatePicker, InputNumber, Modal } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  setEndDate,
  setStartDate,
} from "../../store/reducer/TaskSlice";
import "antd/dist/antd.css";

const { RangePicker } = DatePicker

const DataModal = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { format } = useAppSelector((state) => state.TaskReducer);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onChangeEnd = (date: any) => {
    const formattedDate = moment(date).format(format);

    dispatch(setStartDate(formattedDate));
  };
  const onChangeStart = (date: any) => {
    const formattedDate = moment(date).format(format);

    dispatch(setEndDate(formattedDate));
  };

  const handleClick = () => {
    // dispatch(setDuration());
    // setOpen(false);
  };

  return (
    <>
      {/* <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button> */}
      <Modal
        title="Данные проекта"
        centered
        open={open}
        // onOk={handleClick}
        // onCancel={() => setOpen(false)}
        width={400}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          size="large"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          onSubmitCapture={handleClick}
        >
          <Form.Item name="date">
            <RangePicker />
          </Form.Item>
          {/* <Form.Item
            label="Начало проекта"
            name="startDate"
            style={{width: '100%'}}
            rules={[{ required: true, message: "Назначьте начальную дату" }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Конец проекта"
            name="endDate"
            rules={[{ required: true, message: "Назначьте конечную дату" }]}
          >
            <DatePicker />
          </Form.Item> */}
          <Form.Item label="Бюджет" name="budget">
            <InputNumber prefix="$" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" size="large">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default DataModal;
