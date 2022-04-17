import { Card, Row, Col, Tooltip, Divider, Button, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { EllipsisOutlined, HeartFilled, ShoppingFilled, ShoppingTwoTone } from '@ant-design/icons';
import { useAppDispatch, useAppSelecter } from '../app/hooks';
import { fetchAsyncProductList } from '../features/products/productThunk';
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../type/productType';
import { StyledButton } from './StyleComponent';
import { AsyncAddToCart } from '../features/cart/cartThunk';

const { Meta } = Card;


type Props = {
  data: ProductType[],
  start: number
}
const ProductPanel = (props: Props) => {
  const { data, start } = props;
  const navigate = useNavigate();
  const [number, setNumber] = useState<number>(start);
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelecter(state => state.authReducer);
  const { errorMessage } = useAppSelecter(state => state.cartReducer);
  const loadMore = () => {
    if (number <= data.length) {
      setNumber(number => number + 3);
    }
    else {
      setNumber(3);
    }
  };
  const addToCart = async (productId: string | undefined) => {
    if (userInfo) {
      const cartData = {
        productCart: {
          productId: productId,
          quantity: 1,
        },
        userId: userInfo?._id,
      };
      dispatch(AsyncAddToCart(cartData)).unwrap().then((data) => { message.success("Add to cart", 2) }).catch((error) => { errorMessage ? message.error(errorMessage) : message.error(error.message) });
    } else {
      navigate("/login");
    }
  }
  return (
    <div>
      <div className="site-card-wrapper">
        <Row gutter={[30, 30]} >
          {data.slice(0, number).map((item, index) => <Col span={8} key={index + 1}>
            <Card title={item.name} hoverable
              style={{ width: "100%", height: "100%" }}
              cover={
                <div onClick={() => { navigate(`/products/${item._id}`) }} style={{ overflow: "hidden", height: "600px", background: "#fff" }}>
                  <img style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    alt="example"
                    src={item.image[0]?.url}
                  />
                </div>
              }
              headStyle={{ fontSize: "24px", textTransform: "capitalize", fontWeight: "bold", background: "var(--ant-primary-color)", color: "white" }}
              actions={[
                <Tooltip placement='top' title="Add to cart" >
                  <ShoppingTwoTone style={{ fontSize: "20px" }} key="addtocart" onClick={() => { addToCart(item._id) }} />
                </Tooltip>,
                <Tooltip placement='top' title="Add to favorite">
                  <HeartFilled style={{ fontSize: "20px", color: "crimson" }} key="Heart" />
                </Tooltip>,
                <Tooltip placement='top' title="View more">
                  <EllipsisOutlined style={{ fontSize: "20px" }} key="ellipsis" />
                </Tooltip>
              ]}
            >
              <Meta
                title={<h1>Price: {item.price}$</h1>}
                description={item.description} style={{ minHeight: "10vh" }}
              />
            </Card>
          </Col>)}

        </Row>
        <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
          {data.length === 0 && <h1>No result found</h1>}
          {data && (data.length > 3) && <StyledButton onClick={loadMore} style={{ border: "2px solid var(--ant-primary-color)" }}  >{number < data.length ? "Load More" : "Hide"}</StyledButton>}</div>
      </div >
    </div >
  )
}

export default ProductPanel