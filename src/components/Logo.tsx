import React, { useEffect } from 'react'
import { StyledLogo } from './StyleComponent'
import BrandIcon from "./BrandIcon.svg"
import { useNavigate } from 'react-router-dom'
type Props = {}

const Logo = (props: Props) => {
  // useEffect(() => {
  //   var svg = document.getElementsByTagName("svg")[0];
  //   var bbox = svg.getBBox();

  //   svg.setAttribute("viewBox", (bbox.x - 10) + " " + (bbox.y - 10) + " " + (bbox.width + 20) + " " + (bbox.height + 20));
  //   svg.setAttribute("width", (bbox.width + 20) + "px");
  //   svg.setAttribute("height", (bbox.height + 20) + "px");
  // }, []);
  const navigate = useNavigate();
  return (

    <StyledLogo onClick={() => { navigate("/") }}>
      <img src={BrandIcon} alt="" />
      <h2>SwitchIt!</h2>
    </StyledLogo>
  )
}

export default Logo