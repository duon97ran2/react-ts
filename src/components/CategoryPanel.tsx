import { Card, Col, Pagination, Row } from 'antd'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import { useAppSelecter } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
type Props = {}
const { Meta } = Card;

const CategoryPanel = (props: Props) => {
  const { categories } = useAppSelecter(state => state.categoryReducer);
  const navigate = useNavigate()
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      autoplay={true}
      scrollbar={true}
      navigation={true}
      modules={[Navigation]}
    >
      {categories.map((item, index) => <SwiperSlide key={index + 1}>
        <Card onClick={() => { navigate(`/category/${item._id}`) }}
          hoverable
          style={{ width: "100%" }}
          cover={<img alt="example" src={item.image.url} />}
        >
          <Meta title={item.name} description="Lorem ipsum dolor sit amet." />
        </Card>
      </SwiperSlide>)}




    </Swiper>
  )
}

export default CategoryPanel