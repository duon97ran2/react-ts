import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ImageGallery from 'react-image-gallery';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Swiper.css";

import "react-image-gallery/styles/css/image-gallery.css";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useAppSelecter } from "../app/hooks";

type Props = {
  image: Array<any> | undefined
}


const ImageThumbSwiper = (props: Props) => {
  // const [thumbSwiper, setThumbSwiper] = useState<any>("");
  // const { isFetching } = useAppSelecter(state => state.productReducer);
  // const [images, setImages] = useState<any>(props.image);
  // useEffect(() => {
  //   if (!isFetching)
  //     setImages(props.image);
  // }
  //   , [isFetching])
  const images: any = props.image ? props.image.map(item => ({
    original: item.url,
    thumbnail: item.url,
    originalHeight: "500px",
    thumbnailHeight: "100px",
    thumbnailWidth: "100px"
  })) : [];
  return (


    /* <Swiper
      style={{
        "--swiper-navigation-color": "var(--ant-primary-color)",
        "--swiper-pagination-color": "var(--ant-primary-color)",
      }}
      spaceBetween={10}
      navigation={true}
      thumbs={{ swiper: thumbSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper2"
    >
      {images.map((item: Object, index: number) =>
        <SwiperSlide key={index + 1}>
          <img src={item.url} />
        </SwiperSlide>
      )}
    </Swiper>
    <Swiper
      onSwiper={setThumbSwiper}
      spaceBetween={10}
      slidesPerView={4}
      watchSlidesProgress
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper"
    >
      {images.map((item: Object, index: number) =>
        <SwiperSlide key={index + 1}>
          <img src={item.url} />
        </SwiperSlide>
      )}
    </Swiper> */
    <ImageGallery items={images} />
  )
}

export default ImageThumbSwiper