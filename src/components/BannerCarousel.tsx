import React, { memo } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Carousel } from 'antd'
import { StyledButton } from './StyleComponent'
type Props = {}

const BannerCarousel = (props: Props) => {
  return (
    <div className='banner'>
      <div className="backdrop"></div>
      <Carousel arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />} autoplay autoplaySpeed={4000}>
        <div>
          <img src="https://images.unsplash.com/photo-1589677725258-5374c55919fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1616933067642-ac31e646d4f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1636384960943-b50b6384ebb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
      </Carousel>
      <div className="banner-text">
        <h1>welcome to our shop</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero ipsam soluta corrupti esse molestiae odit iste, quod error. Facere.</p>
        <StyledButton>BUY NOW</StyledButton>
      </div>
    </div>
  )
}

export default BannerCarousel