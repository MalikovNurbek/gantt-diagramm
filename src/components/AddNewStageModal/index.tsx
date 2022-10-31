import React, { FC } from "react";
import { Button, Form, Input, InputNumber, Modal, Typography } from "antd";
import { addStageToTaskByID } from "../../store/reducer/TaskSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IStage } from "../../types/taskTypes";
import styles from "./styles.module.css";

interface ModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (state: boolean) => void;
}

const AddNewStageModal: FC<ModalProps> = ({ isModalOpen, setIsModalOpen }) => {
    const [unplannedDays, setUnpalannedDays] = React.useState<number>();
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();
    const { data, currentTaskId } = useAppSelector(state => state.TaskReducer);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values: IStage) => {
        setIsModalOpen(false);
        form.resetFields();
        dispatch(addStageToTaskByID(values));
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    React.useEffect(() => {
        const taskDuration = data[currentTaskId].taskDuration;
        setUnpalannedDays(
            taskDuration -
                data[currentTaskId].stages.reduce(
                    (prev, current) => prev + current.duration,
                    0
                )
        );
    }, [currentTaskId, data]);

    return (
        <>
            <Modal
                title="Новый этап"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                className={styles.modal}
                footer={
                    <Button danger type="primary" onClick={handleCancel}>
                        Закрыть
                    </Button>
                }
            >
                {!!unplannedDays ? (
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
                            label="название этапа"
                            name="stageTitle"
                            rules={[
                                {
                                    required: true,
                                    message: "Введите название этапа!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Продолжительность"
                            name="duration"
                            labelCol={{ span: 8 }}
                            rules={[
                                {
                                    required: true,
                                    message: `Осталось только ${unplannedDays} незапланированных дней `
                                }
                            ]}
                        >
                            <InputNumber min={1} max={unplannedDays} />
                        </Form.Item>

                        <Form.Item
                            label="Бюджет"
                            name="budget"
                            labelCol={{ span: 8 }}
                        >
                            <InputNumber min={0} />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                            >
                                Создать
                            </Button>
                        </Form.Item>
                    </Form>
                ) : (
                    <Typography className={styles.errorText}>
                        Все дни распределены! <br /> Вы не можете создать этап!
                    </Typography>
                )}
            </Modal>
        </>
    );
};

export default AddNewStageModal;
