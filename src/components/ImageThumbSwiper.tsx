import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Swiper.css";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { useAppSelecter } from "../app/hooks";

type Props = {
  image: Array<any> | undefined
}


const ImageThumbSwiper = (props: Props) => {
  const [thumbSwiper, setThumbSwiper] = useState<any>(null);
  const { isFetching } = useAppSelecter(state => state.productReducer);
  const [images, setImages] = useState<any>(props.image);
  useEffect(() => {
    if (!isFetching)
      setImages(props.image);
  }
    , [isFetching])
  return (
    <>
      <Swiper
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
      </Swiper>
    </>
  )
}

export default ImageThumbSwiper