import { MinusSquareFilled, PlusSquareFilled } from '@ant-design/icons';
import { Button, Col, Form, Image, Input, InputNumber, message, Popconfirm, Row, Space, Table } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelecter } from '../../app/hooks';
import { AsyncClearCart, AsyncDecreaseCartItem, AsyncIncreaseCartItem, AsyncRemoveCartItem } from '../../features/cart/cartThunk';
import { AsyncCreateOrder } from '../../features/orders/orderThunk';
import { CartType } from '../../type/cartType';
import { OrderSend } from '../../type/orderType';
import { ProductType } from '../../type/productType';
type Props = {}
type RequestType = {
  id: string | undefined,
  productId: string | undefined
}

const Cart = (props: Props) => {
  const { cart, errorMessage, isFetching } = useAppSelecter(state => state.cartReducer);
  const { orders, orderMessage, orderFetching } = useAppSelecter(state => state.orderReducer);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const buttonStyle = { cursor: "pointer", color: "var(--ant-primary-color", "&:hover": { color: "white" } };
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text: String, record: ProductType) =>
        <img width="200px" src={record.image ? record.image[0].url : ""} alt="" />
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: String, record: any) => <Link to={`/products/${record.id}`}>{text}</Link>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text: String) => <span>{text}</span>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text: String, record: any) => <div><PlusSquareFilled onClick={() => { increaseItem({ productId: record.id, id: cart?._id }) }} style={buttonStyle} /> {text} <MinusSquareFilled style={buttonStyle} onClick={() => { decreaseItem({ productId: record.id, id: cart?._id }) }} /></div>,
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Popconfirm title="Remove this product？" okText="Yes" onConfirm={() => { confirmDelete({ productId: record.id, id: cart?._id }) }} cancelText="No">
            <Button type='primary' danger>Remove</Button>
          </Popconfirm>
        </Space>
      ),
    }
  ];
  const confirmDelete = (removeData: RequestType) => {
    dispatch(AsyncRemoveCartItem(removeData)).unwrap().then((data) => { message.success("Remove item success") }).catch((error) => { errorMessage ? message.error(errorMessage) : message.error(error.message) });
  };
  const increaseItem = (requestData: RequestType) => {
    const cartItem: any = cart?.products.find((item: any) => item.productId._id == requestData.productId);
    if (cartItem?.quantity < cartItem?.productId.stock) {
      dispatch(AsyncIncreaseCartItem(requestData)).unwrap().catch((error: any) => { errorMessage ? message.error(errorMessage) : message.error(error.message) });
    }
  };
  const decreaseItem = (requestData: RequestType) => {
    const cartItem: any = cart?.products.find((item: any) => item.productId._id == requestData.productId);
    if (cartItem?.quantity > 1) {
      dispatch(AsyncDecreaseCartItem(requestData)).unwrap().catch((error: any) => { errorMessage ? message.error(errorMessage) : message.error(error.message) });
    }
  };
  const confirmClear = (clearData: { id: string | undefined }) => {
    dispatch(AsyncClearCart(clearData)).unwrap().then((data) => { message.success("Clear cart success") }).catch((error) => { errorMessage ? message.error(errorMessage) : message.error(error.message) });
  };
  const cartData = cart?.products.map((item: any, index) => {
    return {
      key: index + 1,
      price: item.productId.price,
      id: item.productId._id,
      name: item.productId.name,
      stock: item.productId.stock,
      image: item.productId.image,
      quantity: item.quantity,
      totalPrice: item.totalPrice,
    }
  });
  const finishSuccess = (post: OrderSend) => {
    post.total = cart?.grandTotal;
    post.products = cart?.products;
    post.userId = cart?.userId;
    dispatch(AsyncCreateOrder(post)).unwrap().then(() => {
      message.success("Order created success");
      dispatch(AsyncClearCart({ id: cart?._id }));
    }).catch((error: any) => {
      message.error(orderMessage ? orderMessage : error.message);
    })
  }
  const finishFailed = () => {
    message.error("Please fill up all required field before checkout");
  };
  return (
    <>
      <Row gutter={20} >
        <Col span={16}>
          <Popconfirm title="Clear all items in cart？" okText="Yes" onConfirm={() => { confirmClear({ id: cart?._id }) }} cancelText="No">
            <Button type='primary' style={{ marginBottom: "20px" }}>Clear cart</Button>
          </Popconfirm>
          <Table loading={isFetching} columns={columns} dataSource={cartData} size='small' /></Col>
        <Col span={8}>
          <h1>Order Information</h1>
          <Form layout='vertical' onFinish={finishSuccess} onFinishFailed={finishFailed}>
            <Form.Item name="name" label="Name" rules={[{ required: true }]} >
              <Input />
            </Form.Item>
            <Form.Item name="address" label="Address" rules={[{ required: true }]} >
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone number" rules={[{ required: true }]} >
              <Input />
            </Form.Item>
            <Form.Item name="note" label="Note" >
              <Input.TextArea rows={4} />
            </Form.Item>
            <h3>Total: {cart?.grandTotal}</h3>
            {cartData?.length != 0 && <Button type='primary' htmlType='submit' >Check out</Button>}
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Cart