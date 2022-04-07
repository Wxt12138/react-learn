import React, { useEffect, useState } from 'react'
import {
    Divider,
    message,
    Table,
    Button,
    Space,
    Tooltip,
    Popconfirm,
    Image,
    Rate,
    Form,
    Input,
    Row,
    Col
} from 'antd';
import { post } from '@/utils/http'
import {
    DeleteOutlined,
    EditOutlined,
    PlusOutlined
} from '@ant-design/icons';
import Module from './module'




export default function TableList() {

    const columns = [
        // {
        //     dataIndex: "id"
        // },
        {
            title: "游戏名称",
            dataIndex: "name",
        },
        {
            title: "图片",
            dataIndex: "imgurl",
            width: 200,
            render: (text, record) => (
                <Image
                    width={200}
                    src={record.imgurl}
                />
            )
        },
        {
            title: "价格",
            width: 60,
            dataIndex: "price",
        },
        {
            title: "销量",
            dataIndex: "salesnum",
        },
        {
            title: "人气",
            dataIndex: "peoplenum",
        },
        {
            title: "游戏平台",
            dataIndex: "gametype",
            width: 100,
            render: (text, record) => {
                switch (record.gametype) {
                    case '0':
                        return "主机";
                    case '1':
                        return "PC"
                    case '2':
                        return "手游";
                    default:
                        return ''
                }
            }
        },
        {
            title: "评分",
            dataIndex: "rate",
            width: 180,
            render: (text, record) => {
                return <Rate disabled value={record.rate} />
            }
        },
        {
            title: "游戏分级",
            dataIndex: "gameleave",
            render: (text, record) => {
                switch (record.gameleave) {
                    case 1:
                        return "A";
                    case 2:
                        return "B"
                    case 3:
                        return "C";
                    case 4:
                        return "D";
                    default:
                        return ''
                }
            }
        },
        {
            title: "标签",
            dataIndex: "sign",
            render: (text, record) => (
                record.signs.join(',')
            )
        },
        {
            title: "评语",
            dataIndex: "introduce",
        },
        {
            title: '操作',
            key: 'action',
            fixed: "right",
            width: 80,
            render: (text, record) => (
                <Space >
                    <Tooltip placement="topLeft" title="修改">
                        <Button onClick={() => {
                            showmodel(false, record)
                        }} type="primary" icon={<EditOutlined />} />
                    </Tooltip>
                    <Tooltip placement="topLeft" title="删除">
                        <Popconfirm placement="topLeft" title="是否删除" onConfirm={() => {
                            deletedata(record.uid)
                        }} okText="是" cancelText="否">
                            <Button danger type="primary" icon={<DeleteOutlined />} />
                        </Popconfirm>
                    </Tooltip>

                </Space>
            ),
        },

    ]

    let [list, setList] = useState([]);
    let [isModalVisible, setIsModalVisible] = useState(false);
    let [rowData, setRowData] = useState();
    let [searchForm] = Form.useForm();

    useEffect(() => {
        getlist()
    }, [])
    // 搜索
    function onFinish(val) {
        console.log(val)
        getlist(val)
    }
    // 获取列表
    async function getlist(data) {
        let res = await post('/search', data);
        if (res.code != 200) return message.error(res.message)
        setList(res.data)
    }
    // 删除数据
    async function deletedata(uid) {
        let res = await post('/delete', { uid: uid });
        if (res.code != 200) return message.error(res.message);
        message.success("删除成功");
        getlist()
    }
    // 打开弹窗
    async function showmodel(bol, data) {
        //   判断是否新增，true是，false不是
        if (!bol) {
            setRowData(data)
        }
        setIsModalVisible(true)
    }
    // 弹窗关闭
    function handleCancel(bol) {
        setIsModalVisible(false)
        if (bol) {
            getlist()
        }
    }
    // 新增
    function addList() {
        setRowData({})
        showmodel(true)
    }
    return (
        <div>
            <Divider orientation="left">表格的操作</Divider>
            <div>
                <Form
                    form={searchForm}
                    onFinish={onFinish}
                >
                    <Row gutter={24}>
                        <Col span={6}>
                            <Form.Item name="name">
                                <Input placeholder="名称" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">
                                搜索
                            </Button>
                            <Button
                                style={{ margin: '0 8px' }}
                                onClick={() => {
                                    searchForm.resetFields();
                                    getlist();
                                }}
                            >
                                清空
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div style={{
                "margin": "5px 0",
                "textAlign": "left"
            }}>
                <Button onClick={addList} type="primary" icon={<PlusOutlined />}>新增</Button>
            </div>
            <Table
                rowKey="uid"
                size="middle"
                columns={columns}
                dataSource={list}
                pagination
                scroll
            />
            {isModalVisible && <Module rowData={rowData} isshow={isModalVisible} handleCancel={handleCancel}></Module>}
        </div>
    )
}
