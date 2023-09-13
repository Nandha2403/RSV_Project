import React from 'react'
import "./CustomArrow.css"
import { AiOutlineLeft } from "react-icons/ai";

const CustomPrevArrow = (props) => (
    <div className="custom-arrow custom-prev-arrow" onClick={props.onClick}>
      <AiOutlineLeft fontSize={'30px'}/>
    </div>
  );
  

export default CustomPrevArrow