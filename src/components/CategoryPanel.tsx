import { Card, Col, Pagination, Row } from 'antd'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from 'swiper';
type Props = {}
const { Meta } = Card;

const CategoryPanel = (props: Props) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      autoplay={true}
      scrollbar={true}
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={<img alt="example" src="https://images.unsplash.com/photo-1612447624836-cf25349cf930?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />}
        >
          <Meta title="Category name" description="Lorem ipsum dolor sit amet." />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={<img alt="example" src="https://images.unsplash.com/photo-1612447624836-cf25349cf930?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />}
        >
          <Meta title="Category name" description="Lorem ipsum dolor sit amet." />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={<img alt="example" src="https://images.unsplash.com/photo-1612447624836-cf25349cf930?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />}
        >
          <Meta title="Category name" description="Lorem ipsum dolor sit amet." />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={<img alt="example" src="https://images.unsplash.com/photo-1612447624836-cf25349cf930?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />}
        >
          <Meta title="Category name" description="Lorem ipsum dolor sit amet." />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={<img alt="example" src="https://images.unsplash.com/photo-1612447624836-cf25349cf930?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />}
        >
          <Meta title="Category name" description="Lorem ipsum dolor sit amet." />
        </Card>
      </SwiperSlide>
    </Swiper>
  )
}

export default CategoryPanel