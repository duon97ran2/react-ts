import { Button, Image, message, Popconfirm, Space, Table } from 'antd';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelecter } from '../../../app/hooks';
import { AsyncRemoveCategory } from '../../../features/categories/categoryThunk';
import { CategoryType } from '../../../type/categoryType';



type Props = {}

const CategoryList = (props: Props) => {
  const { categories, errorMessage, isFetching } = useAppSelecter(state => state.categoryReducer);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const columns = [
    {
      title: 'Category name',
      dataIndex: 'name',
      key: 'name',
      render: (text: String) => <a>{text}</a>,
    },
    {
      title: 'Avatar',
      dataIndex: 'image',
      key: 'image',
      render: (text: String, record: CategoryType) => <img width="200px" src={record.image ? record.image.url : ""} alt="" />
    },
    {
      title: 'Created at',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: CategoryType) => (
        <Space size="middle">
          <Button><Link to={`${record._id}/edit`}>Edit</Link></Button>
          <Popconfirm title="Delete this category" okText="Yes" onConfirm={() => { confirmDelete(record._id) }} cancelText="No">
            <Button>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    }
  ];
  const confirmDelete = (id: string | undefined) => {
    dispatch(AsyncRemoveCategory(id)).unwrap().then(() => { message.success("Delete user success") }).catch((error: any) => { errorMessage ? message.error(errorMessage) : message.error(error.message) });
  };
  const categoryData = categories.map((item, index) => {
    return {
      key: index + 1,
      _id: item._id,
      name: item.name,
      image: item.image,
      createdAt: item.createdAt
    }
  }
  );
  return (
    <>
      <Button style={{ marginBottom: "20px" }}><Link to="add">Add Category</Link></Button>
      <Table loading={isFetching} columns={columns} scroll={{ x: "1500px" }} dataSource={categoryData} size='small' />
    </>
  )
}

export default CategoryList