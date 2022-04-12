import { Checkbox, Col, Layout, Row, Slider, Card, Tooltip, Form, Select, Radio, Button, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelecter } from '../../app/hooks';
import { AsyncSearchProduct, fetchAsyncProductByCategory } from '../../features/products/productThunk';
import { useNavigate } from 'react-router-dom';
import { EllipsisOutlined, HeartFilled, ShoppingTwoTone } from '@ant-design/icons';
import ProductPanel from '../../components/ProductPanel';
import { isPending } from '@reduxjs/toolkit';

const { Meta } = Card;



type Props = {}

const ProductCategory = (props: Props) => {
  const { categories } = useAppSelecter(state => state.categoryReducer);
  const { isFetching, products } = useAppSelecter(state => state.productReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { text } = useParams();
  const [data, setData] = useState<any>([]);
  const [filter, setFilter] = useState<any>([]);
  const category = categories.find(item => item._id == text);
  const filterHandle = (post: any) => {
    setFilter(post);
  };
  useEffect(() => {
    if (!isFetching) {
      if (text) {
        dispatch(fetchAsyncProductByCategory({ categoryId: text, filter: filter })).then((data) => { setData(data.payload) });
      }
      else setData(products);
    }
  }, [isFetching]);
  return (<>
    <h1>Category: {category?.name ?? "All"} </h1>


    <Form layout='horizontal' style={{ marginBottom: "20px" }} onFinish={filterHandle} >
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item name="range" label="Price range" >
            <Select>
              <Select.Option value="under-5">Under 5</Select.Option>
              <Select.Option value="under-10">Under 10</Select.Option>
              <Select.Option value="under-15">Under 15</Select.Option>
              <Select.Option value="under-20">Under 20</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="date" label="Date" >
            <Radio.Group>
              <Radio value="asc">Latest</Radio>
              <Radio value="desc">Oldest</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24} >
          <Button type="primary" htmlType="submit">
            Filter
          </Button>
        </Col>
      </Row>
    </Form>


    <ProductPanel data={data} start={3} />

  </>
  )
}

export default ProductCategory