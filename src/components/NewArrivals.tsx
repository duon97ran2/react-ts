import { Carousel, Row, Col, Card, Rate } from 'antd'
import React from 'react'
import { StyledButton, StyledSlide } from './StyleComponent'

type Props = {}

const NewArrivals = (props: Props) => {
  return (
    <Carousel autoplay autoplaySpeed={4000}>
      <StyledSlide>
        <Row>
          <Col span={16}>
            <img src="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="" />
          </Col>
          <Col span={8}  >
            <Card style={{ height: "100%" }}>
              <h3>Lorem, ipsum dolor.</h3>
              <Rate disabled defaultValue={5} style={{ marginBottom: "10px" }} />
              <h5>Price: 30000</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, beatae. Accusamus earum debitis molestiae minima exercitationem sed ducimus eaque sunt?</p>
              <StyledButton>Order</StyledButton>
            </Card>
          </Col>
        </Row>
      </StyledSlide>
    </Carousel>
  )
}

export default NewArrivals