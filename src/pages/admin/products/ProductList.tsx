import { Button, Image, message, Popconfirm, Space, Table } from 'antd';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelecter } from '../../../app/hooks';
import { AsyncRemoveProduct } from '../../../features/products/productThunk';
import { ProductType } from '../../../type/productType';

type Props = {}

const ProductList = (props: Props) => {
  const { products, errorMessage, isFetching } = useAppSelecter(state => state.productReducer);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: String) => <a>{text}</a>,
    },
    Table.EXPAND_COLUMN,
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (_: any, record: ProductType) => <span>{record.category?.name}</span>
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text: String, record: ProductType) => <img width="200px" src={record.image ? record.image[0].url : ""} alt="" />
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: ProductType) => (
        <Space size="middle">
          <Button><Link to={`${record._id}/edit`}>Edit</Link></Button>
          <Popconfirm title="Delete this product？" okText="Yes" onConfirm={() => { confirmDelete(record._id) }} cancelText="No">
            <Button>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    }
  ];
  const confirmDelete = (id: string | undefined) => {
    dispatch(AsyncRemoveProduct(id)).unwrap().then((data) => { message.success("Delete product success") }).catch((error) => { message.error(error.message) });
  }
  const productData = products.map((item, index) => {
    return {
      key: index + 1,
      _id: item._id,
      price: item.price,
      name: item.name,
      category: item.category,
      image: item.image,
      stock: item.stock,
      description: item.description
    }
  }
  );
  return (
    <>
      <Button style={{ marginBottom: "20px" }}><Link to="add">Add Product</Link></Button>
      <Table loading={isFetching} columns={columns} scroll={{ x: "1500px" }} dataSource={productData} size='small' expandable={{ expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p> }} />
    </>
  )
}

export default ProductList