import React from 'react'
import BannerCarousel from '../../components/BannerCarousel'
import CategoryPanel from '../../components/CategoryPanel'
import CustomerReview from '../../components/CustomerReview'
import NewArrivals from '../../components/NewArrivals'
import ProductPanel from '../../components/ProductPanel'
import { StyledTitle } from '../../components/StyleComponent'
import "./Home.css"
type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <BannerCarousel />
      <StyledTitle>Categories</StyledTitle>
      <CategoryPanel />
      <StyledTitle>Our Products</StyledTitle>
      <ProductPanel />
      <StyledTitle>New Arrivals</StyledTitle>
      <NewArrivals />
      <StyledTitle>Customer Reviews</StyledTitle>
      <CustomerReview />
    </div>
  )
}

export default Home