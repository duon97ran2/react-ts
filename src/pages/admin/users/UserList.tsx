import { Button, Image, message, Popconfirm, Space, Table } from 'antd';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelecter } from '../../../app/hooks';
import { AsyncRemoveProduct } from '../../../features/products/productThunk';
import { AsyncFetchUserList, AsyncRemoveUser } from '../../../features/users/userThunk';
import { ProductType } from '../../../type/productType';
import { UserType } from '../../../type/userType';

type Props = {}
type Column = {
  title: string,
  dataIndex: string,
  key: string,
  render?: (text: string, record: any) => JSX.Element
};

const UserList = (props: Props) => {
  const { users, errorMessage, isFetching } = useAppSelecter(state => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(AsyncFetchUserList());
  }, [dispatch]);
  const columns: Column[] = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      render: (text: String) => <a>{text}</a>,
    },
    {
      title: 'Avatar',
      dataIndex: 'image',
      key: 'image',
      render: (text: String, record: UserType) => <img width="200px" src={record.image ? record.image.url : ""} alt="" />
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (_: any, record: UserType) => <span>{record.role === 0 ? "member" : "admin"}</span>
    },
    {
      title: 'Action',
      dataIndex: "action",
      key: 'action',
      render: (_: any, record: UserType) => (
        <Space size="middle">
          <Button><Link to={`${record._id}/edit`}>Edit</Link></Button>
          <Popconfirm title="Delete this user？" okText="Yes" onConfirm={() => { confirmDelete(record._id) }} cancelText="No">
            <Button>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    }
  ];
  const confirmDelete = (id: string | undefined) => {
    dispatch(AsyncRemoveUser(id)).unwrap().then((data) => { message.success("Delete user success") }).catch((error) => { errorMessage ? message.error(errorMessage) : message.error(error.message) });
  };
  const userData = users.map((item, index) => {
    return {
      key: index + 1,
      _id: item._id,
      username: item.username,
      email: item.email,
      role: item.role,
      image: item.image
    }
  }
  );
  return (
    <>
      <Button style={{ marginBottom: "20px" }}><Link to="add">Add User</Link></Button>
      <Table loading={isFetching} columns={columns} scroll={{ x: "1500px" }} dataSource={userData} size='small' />
    </>
  )
}

export default UserList