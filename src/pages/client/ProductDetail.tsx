import { ArrowLeftOutlined, ArrowRightOutlined, EyeOutlined, HeartOutlined, LeftOutlined, RightOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Card, Carousel, Col, Form, Grid, InputNumber, message, Rate, Row, Space, Tabs } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelecter } from '../../app/hooks';
import ImageThumbSwiper from '../../components/ImageThumbSwiper';
import { AsyncAddToCart } from '../../features/cart/cartThunk';
import { fetchAsyncProductByCategory } from '../../features/products/productThunk';
const { TabPane } = Tabs;

type Props = {}

const ProductDetail = (props: Props) => {
  function financial(x: number | undefined, y: number | undefined) {
    if (x && y) return (x * (1 - y / 100)).toFixed(2);

  }
  const [activeTabKey2, setActiveTabKey2] = useState('app');
  const onTab2Change = (key: any) => {
    setActiveTabKey2(key);
  };
  const { userInfo } = useAppSelecter(state => state.authReducer);
  const { errorMessage } = useAppSelecter(state => state.cartReducer);
  const dispatch = useAppDispatch();
  const tabListNoTitle: { key: string, tab: string }[] = [
    {
      key: 'related',
      tab: 'Related Products',
    },
    {
      key: 'description',
      tab: 'Description',
    },
  ];
  const { id } = useParams();
  const { products, isFetching } = useAppSelecter(state => state.productReducer);
  const product = products.find(item => item._id === id);
  const finishSuccess = (post: any) => {
    if (userInfo) {
      const cartData = {
        productCart: {
          productId: product?._id,
          quantity: post.quantity,
        },
        userId: userInfo._id,
      };
      dispatch(AsyncAddToCart(cartData)).unwrap().then(() => {
        message.success("Product added successfuly")
      }).catch((error) => { errorMessage ? message.error(errorMessage) : message.error(error.message) })
    }
  }
  return (
    <>
      <Row gutter={50}>
        <Col span={12}>
          <ImageThumbSwiper image={product?.image} />
        </Col>
        <Col span={12}>
          <div>
            <h1 style={{ color: "var(--ant-primary-color)", fontSize: "2.5vw", fontWeight: 'bold' }}>{product?.name}</h1>
            <Rate disabled defaultValue={5} />
            <h2 style={{ fontSize: "1.5vw", fontWeight: 'bold', marginTop: "20px" }}>Price: <span style={{ color: "var(--ant-primary-color)" }}>{financial(product?.price, product?.discount)} $</span>   <span style={{ textDecoration: "line-through", color: "gray" }}>{product?.price} $</span></h2>
            <h5 style={{ fontSize: "1vw", fontWeight: 'semibold' }}>Views: {product?.view}</h5>
            <h5 style={{ fontSize: "1vw", fontWeight: 'semibold', marginBottom: "20px" }}>Stock: {product?.stock}</h5>
            <Form initialValues={{ quantity: 1 }} onFinish={finishSuccess}>
              <Form.Item name="quantity" >
                <InputNumber min={1} max={product?.stock} />
              </Form.Item>
              <Space>
                <Button type='primary' htmlType='submit' size='large'><ShoppingCartOutlined /> Add to cart</Button>
                <Button type='primary' danger size='large'><HeartOutlined /> Add to wishlist</Button>
              </Space>
            </Form>

          </div>
        </Col>
      </Row>

      <Tabs defaultActiveKey="1" style={{ marginTop: "20px" }}>
        <TabPane tab="Description" key="1" style={{ height: 200 }}>
          <p>{product?.description}</p>
        </TabPane>
        <TabPane tab="Related Product" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Comment" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>

    </>
  )
}

export default ProductDetail