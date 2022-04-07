import React from 'react'
import { Modal, Form, Input, Select, Rate, Radio, Checkbox, message } from 'antd';
import { post } from '@/utils/http'

export default function Module(props) {
    const { TextArea } = Input;
    const gamesign = [
        { label: '动作', value: '动作' },
        { label: '冒险', value: '冒险' },
        { label: 'RGB', value: 'RGB' },
        { label: '多人', value: '多人' },
        { label: '联机', value: '联机' },
        { label: '益智', value: '益智' },
        { label: '卡牌', value: '卡牌' },
        { label: '竞技', value: '竞技' },
        { label: '恋爱', value: '恋爱' },
        { label: '探险', value: '探险' },
        { label: '4399', value: '4399' },

    ]
    // 设置值

    const [form] = Form.useForm();
    const handleOk = () => {
        form.submit();
    }
    const onFinish = (values) => {
        let newData = values;
        if (props.rowData.uid) {
            newData.uid = props.rowData.uid
            post('/update', newData).then((res) => {
                if (res.code == 200) {
                    message.success("修改成功")
                    props.handleCancel(true);
                } else {
                    message.error(res.message);
                }
            })
        } else {
            post('/addList', newData).then((res) => {
                if (res.code == 200) {
                    message.success("新增成功")
                    props.handleCancel(true);
                } else {
                    message.error(res.message);
                }
            })
        }

    }
    return (
        <div>
            <Modal title="Basic Modal" visible={props.isshow} onOk={handleOk} onCancel={props.handleCancel}>
                <Form
                    name="userForm"
                    labelCol={{
                        span: 4,
                    }}
                    form={form}
                    onFinish={onFinish}
                    initialValues={props.rowData}
                >
                    <Form.Item
                        label="名称"
                        name="name"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="价格"
                        name="price"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="销量"
                        name="salesnum"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="人气"
                        name="peoplenum"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="游戏平台"
                        name="gametype"
                    >
                        <Select>
                            <Select.Option value="0">主机</Select.Option>
                            <Select.Option value="1">PC</Select.Option>
                            <Select.Option value="2">手游</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="rate" label="评分">
                        <Rate />
                    </Form.Item>
                    <Form.Item
                        label="游戏分级"
                        name="gameleave"
                    >
                        <Radio.Group>
                            <Radio value={1}>A</Radio>
                            <Radio value={2}>B</Radio>
                            <Radio value={3}>C</Radio>
                            <Radio value={4}>D</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label="标签"
                        name="signs"
                    >
                        <Checkbox.Group
                            options={gamesign}
                        />
                    </Form.Item>
                    <Form.Item
                        label="图片链接"
                        name="imgurl"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="说点什么"
                        name="introduce"
                    >
                        <TextArea />
                    </Form.Item>

                </Form>
            </Modal>
        </div>
    )
}
