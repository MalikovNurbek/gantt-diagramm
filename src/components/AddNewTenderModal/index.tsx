import React, { FC } from "react";
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Modal,
    Switch
} from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { createTask } from "../../store/reducer/TaskSlice";
import { ITask, ITaskInfo } from "../../types/taskTypes";
import moment from "moment";
const { RangePicker } = DatePicker;

interface ModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (state: boolean) => void;
}

const AddNewTenderModal: FC<ModalProps> = ({ isModalOpen, setIsModalOpen }) => {
    const [form] = Form.useForm<ITaskInfo>();
    const dispatch = useAppDispatch();

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (taskInfo: ITaskInfo) => {
        const format = "DD.MM.YYYY";

        let period = [...taskInfo.period];
        const dates: string[] = [];

        const taskDuration = Math.abs(period[0].diff(period[1], "days"));

        for (let i = 0; i <= 29; i++) {
            dates.push(moment(period[0]).add(i, "day").format(format));
        }

        const task: ITask = {
            taskInfo,
            dates,
            taskId: 0,
            stages: [],
            taskDuration
        };

        setIsModalOpen(false);
        dispatch(createTask(task));
        form.resetFields();
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <Modal
                title="Новый тендер"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={<></>}
                centered
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout={"vertical"}
                    form={form}
                >
                    <Form.Item
                        label="Название тендера"
                        name="taskTitle"
                        rules={[
                            {
                                required: true,
                                message: "Введите название тендера!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Инвестиции"
                        name="investments"
                        rules={[
                            { required: true, message: "Введите инвестиции" }
                        ]}
                    >
                        <InputNumber addonBefore="+" addonAfter="$" min={1} />
                    </Form.Item>

                    <Form.Item
                        label="Фирма"
                        name="firm"
                        rules={[{ required: true, message: "" }]}
                    >
                        <InputNumber addonBefore="+" addonAfter="$" min={1} />
                    </Form.Item>

                    <Form.Item
                        label="Сумма расходов"
                        name="expenses"
                        rules={[
                            {
                                required: true,
                                message: "Введите сумму расходов!"
                            }
                        ]}
                    >
                        <InputNumber addonBefore="+" addonAfter="$" min={1} />
                    </Form.Item>

                    <Form.Item
                        name="isActiveFirm"
                        label="Активность"
                        valuePropName="checked"
                    >
                        <Switch />
                    </Form.Item>

                    {/* <Form.Item
            label="Маржа"
            name="marzha"
            rules={[{ required: true, message: "Маржу" }]}
          >
            <InputNumber addonBefore="+" addonAfter="$" defaultValue={0}/>
          </Form.Item> */}

                    <Form.Item
                        label="Период"
                        name="period"
                        rules={[
                            {
                                required: true,
                                message: "Выберите период тендера!"
                            }
                        ]}
                    >
                        <RangePicker />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" size="large">
                            Создать
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default AddNewTenderModal;
