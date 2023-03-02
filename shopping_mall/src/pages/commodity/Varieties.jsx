import React, { useState, useEffect, useMemo } from 'react'
import { Space, Table, Tag, Button, Card } from 'antd';
import './varieties.css'
import { findCategroy } from '../../api/Commodity'
import AddVarieties from '../../component/AddVarieties';
import { useRef } from 'react';
export default function Varieties() {
    // 表头数组
    const [columns, setcolumns] = useState([
        {
            title: '类型名字',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '类别',
            dataIndex: 'type',
            key: 'type',
            render: (name, record) => (
                <>
                    {
                        <Tag color={name == '二级分类' ? 'orange' : 'purple'} key={name}>
                            {name.toUpperCase()}
                        </Tag>
                    }
                </>
            ),
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => {
                return (
                    <Space size="middle">
                        <span className='green'>删除</span>
                        <span className='green'>修改</span>
                        {record.parentId == '0' ?
                            <Button type='primary'
                                onClick={() => ref.current.showModal('二级分类',record._id)}>新增二级分类</Button> : ''}
                    </Space>
                )
            },
        },
    ])
    // 存储商品类型数据
    const [data, setdata] = useState([])
    // 获取ref
    const ref = useRef()
    useEffect(() => {
        getTypeList()
    }, [])
    // 获取商品类别数据
    const getTypeList = (id) => {
        findCategroy({ parentId: id ? id : 0 }).then(res => {
            if (res.code == 1) {
                setdata([...res.data.data])
            }
        })
    }
    const tableData = useMemo(() => {
        return data.map(item => {
            if (!item.children) {
                return {
                    ...item,
                    children: []
                }
            }
            return item
        })
    }, [data])
    const onExpand = (expanded, record) => {
        // console.log(expanded, record);
        if (expanded) {
            findCategroy({ parentId: record._id }).then(res => {
                setdata(data.map(item => {
                    if (item._id === record._id) {
                        return {
                            ...item,
                            children: res.data.data
                        }
                    }
                    return item
                }))
            })
        }
    }
    return (
        <div>
            <Card title="商品类型" extra={<Button type='primary'
                onClick={() => ref.current.showModal('一级分类','')}>新增一级分类</Button>}>
                <Table
                    columns={columns}
                    dataSource={tableData}
                    pagination={false}
                    onExpand={onExpand}
                    rowKey='_id' />
            </Card>
            <AddVarieties
                ref={ref}
                getTypeList={getTypeList}
            ></AddVarieties>
        </div>
    )
}
