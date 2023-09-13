import React from 'react'
import { AiOutlineRight } from "react-icons/ai";


const CustomNextArrow = (props) => (
    <div className="custom-arrow custom-next-arrow" onClick={props.onClick}>
      <AiOutlineRight fontSize={'30px'}/>
    </div>
  );

export default CustomNextArrow