import { Checkbox, Col, Layout, Row, Slider, Card, Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelecter } from '../../app/hooks';
import { AsyncSearchProduct } from '../../features/products/productThunk';
import { useNavigate } from 'react-router-dom';
import { EllipsisOutlined, HeartFilled, ShoppingTwoTone } from '@ant-design/icons';

const { Meta } = Card;



type Props = {}

const Search = (props: Props) => {
  const { categories } = useAppSelecter(state => state.categoryReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { text } = useParams();
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    dispatch(AsyncSearchProduct(text)).then((data) => { setData(data.payload) });
  }, [text])
  return (<>
    <h1>Search result for {text}</h1>
    <Row gutter={20}>
      <Col span={8}><h3 style={{ marginBottom: "30px" }}>Price range:</h3>
        <Slider style={{ marginBottom: "30px" }} range defaultValue={[20, 50]} /></Col>
      <Col span={8}><h3 style={{ marginBottom: "30px" }}>Category:</h3></Col>
      <Col span={8}></Col>
    </Row>
    <div>
      <div className="site-card-wrapper">
        <Row gutter={[30, 30]} >
          {data.map((item, index) => <Col span={8} key={index + 1}>
            <Card title={item.name} onClick={() => { navigate(`products/${item._id}`) }} hoverable
              style={{ width: "100%", height: "100%" }}
              cover={
                <div style={{ overflow: "hidden", height: "600px", background: "#fff" }}>
                  <img style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    alt="example"
                    src={item.image[0]?.url}
                  />
                </div>
              }
              headStyle={{ fontSize: "24px", textTransform: "capitalize", fontWeight: "bold", background: "var(--ant-primary-color)", color: "white" }}
              actions={[
                <Tooltip placement='top' title="Add to cart">
                  <ShoppingTwoTone style={{ fontSize: "20px" }} key="addtocart" />
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
      </div >
    </div >

  </>
  )
}

export default Search