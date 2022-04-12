import React from 'react'
import { useAppSelecter } from '../../app/hooks'
import BannerCarousel from '../../components/BannerCarousel'
import CategoryPanel from '../../components/CategoryPanel'
import CustomerReview from '../../components/CustomerReview'
import NewArrivals from '../../components/NewArrivals'
import ProductPanel from '../../components/ProductPanel'
import { StyledTitle } from '../../components/StyleComponent'
import "./Home.css"
type Props = {}

const Home = (props: Props) => {
  const { products } = useAppSelecter((state) => state.productReducer);
  return (
    <div>
      <BannerCarousel />
      <StyledTitle>Categories</StyledTitle>
      <CategoryPanel />
      <StyledTitle>Our Products</StyledTitle>
      <ProductPanel data={products} start={3} />
      <StyledTitle>New Arrivals</StyledTitle>
      <NewArrivals />
      <StyledTitle>Customer Reviews</StyledTitle>
      <CustomerReview />
    </div>
  )
}

export default Home