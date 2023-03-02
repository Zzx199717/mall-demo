import React, { forwardRef, useState, useImperativeHandle } from 'react'
import { Modal, Form, Input,message } from 'antd';
import { addCategroy } from '../api/Commodity';
function AddVarieties({getTypeList}, ref) {
    // 是否开启弹窗
    const [obj, setObj] = useState({
        open: false,
        confirmLoading: false,
        modalInput: '',
        title: '一级分类',
        parentId: ''
    });
    const [messageApi, contextHolder] = message.useMessage();
    // 开启弹窗
    const showModal = (res, id) => {
        setObj({ ...obj, open: true, title: res, parentId: id });
    };
    // 取消按钮回调
    const handleCancel = () => {
        setObj({ ...obj, open: false });
    };
    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'This is a success message',
        });
      };
    const handleOk = () => {
        addCategroy({
            name: obj.modalInput,
            type: obj.title,
            parentId: obj.parentId
        }).then(res => {
            console.log(res);
            if (res.code == 1) {
                setObj({ ...obj, open: false });
                success()
                getTypeList()
            }
        })
    };
    // 将子组件方法或数据返回到父组件
    useImperativeHandle(ref, () => {
        return {
            showModal
        }
    })
    return (
        <div>
            <Modal
                title={obj.title}
                open={obj.open}
                onOk={handleOk}
                confirmLoading={obj.confirmLoading}
                onCancel={handleCancel}
                cancelText='取消'
                okText='确定'
            >
                <Form
                    name="basic"
                    labelCol={{ span: 4, }}
                    wrapperCol={{ span: 20, }}
                    style={{ maxWidth: 600, }}
                    initialValues={{ remember: true, }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="类别名称"
                        name="categoryName"
                        rules={[
                            {
                                required: true,
                                message: '请输入类别名称',
                            },
                        ]}
                    >
                        <Input value={obj.modalInput} onChange={(e) =>
                            setObj({ ...obj, modalInput: e.target.value })} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
export default forwardRef(AddVarieties)