import { Checkbox, Col, Layout, Row, Slider, Card, Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelecter } from '../../app/hooks';
import { AsyncSearchProduct } from '../../features/products/productThunk';
import { useNavigate } from 'react-router-dom';
import { EllipsisOutlined, HeartFilled, ShoppingTwoTone } from '@ant-design/icons';
import ProductPanel from '../../components/ProductPanel';
import { isPending } from '@reduxjs/toolkit';

const { Meta } = Card;



type Props = {}

const Search = (props: Props) => {
  const { categories } = useAppSelecter(state => state.categoryReducer);
  const { isFetching } = useAppSelecter(state => state.productReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { text } = useParams();
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    if (!isFetching) {
      dispatch(AsyncSearchProduct(text)).then((data) => { setData(data.payload) });
    }
  }, [isFetching]);
  return (<>
    <h1>Search result for {text}</h1>
    <ProductPanel data={data} start={3} />

  </>
  )
}

export default Search