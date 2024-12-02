import { useEffect } from "react"
import axios from 'axios';
import './style-weather-1202.css';
//import { IoIosUmbrella } from "react-icons/io";

function App() {

  useEffect(() => {
    (async () => {
      // const data = await axios.get('./F-C0032-001.json');
      const data = await axios.get('');
      const { location } = data.data.cwaopendata.dataset;
    })
  }, [])

  return (
    <>
      <h2>36小時天氣預報</h2>
      <h3>三十六小時天氣預報</h3>
      <div id="weatherList">
        <div id="city">
          <p>台北市</p>
          <div id="date">
            <div>
              <p>2日</p>
              <p>上午6:00</p>
              <p>~</p>
              <p>下午6:00</p>
              <img src="" alt="" />
              <p>晴時多雲</p>
              {/* <IoIosUmbrella /> */}<p>10%</p>
            </div>
            <div>
              <p>2日</p>
              <p>上午6:00</p>
              <p>~</p>
              <p>下午6:00</p>
              <img src="" alt="" />
              <p>晴時多雲</p>
              {/* <IoIosUmbrella /> */}<p>10%</p>
            </div>
            <div>
              <p>2日</p>
              <p>上午6:00</p>
              <p>~</p>
              <p>下午6:00</p>
              <img src="" alt="" />
              <p>晴時多雲</p>
              {/* <IoIosUmbrella /> */}<p>10%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App