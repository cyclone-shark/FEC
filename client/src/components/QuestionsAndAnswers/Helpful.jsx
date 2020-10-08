import React, {useState} from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";


const Helpful = () => {

  const id = useSelector((state) => state.productId);
  const [counter, setCounter] = useState(0)

  const onCount = () => {
    axios.put(`http://18.224.37.110/qa/questions/${id}/helpful`)
  }

  return (
    <div>Helpful</div>
  )
}



export default Helpful;