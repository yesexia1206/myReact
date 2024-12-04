import { useEffect, useState } from "react"
import axios from 'axios';
import './style-weather-1202.css';
import { IoIosUmbrella } from "react-icons/io";

function App() {

    const [weatherList, setWeatherList] = useState([]);

    useEffect(() => {
        (async () => {
            //本地端要在web-server伺服器下才可執行
            // const data = await axios.get('./F-C0032-001.json');
            //json的連結必須是公開網址下的來源
            const data = await axios.get('https://yesexia1206.github.io/myReact/json/F-C0032-001.json');
            //console.log(data);
            const { location } = data.data.cwaopendata.dataset;
            console.log(location);
            setWeatherList(location);
        })()
    }, [])

    return (
        //locationName =>縣市名
        //elementName => Wx =>天氣概況
        //elementName => PoP =>降雨率
        <>
            <div className="wrap">
                <h2>36小時天氣預報</h2>
                <h3>三十六小時天氣預報</h3>
                {
                    weatherList.map((city) => {
                        return <div key={city.locationName}>{city.locationName}</div>
                    })
                }

                {/* 一列兩欄 */}
                <div className="row">

                    {/* 第一欄 */}
                    <div className="col">
                        {/* 卡片樣式 */}
                        <div className="card">
                            {/* 標題 */}
                            <div className="card-title">台北市</div>
                            {/* 內容 */}
                            <div className="card-body">
                                {/* 一列三欄 */}
                                <div className="row2">
                                    {/* 第一欄 */}
                                    <div className="col2">
                                        <p>2日</p>
                                        <p>
                                            上午6:00
                                            <br />
                                            ~
                                            <br />
                                            下午6:00
                                        </p>
                                        <p>
                                            <img src="images/weatherIcon/晴時多雲.svg" alt="" />
                                        </p>
                                        <p>晴時多雲</p>
                                        <p><IoIosUmbrella />10%</p>
                                    </div>
                                    {/* 第二欄 */}
                                    <div className="col2">
                                        <p>2日</p>
                                        <p>
                                            上午6:00
                                            <br />
                                            ~
                                            <br />
                                            下午6:00
                                        </p>
                                        <p>
                                            <img src="images/weatherIcon/晴時多雲.svg" alt="" />
                                        </p>
                                        <p>晴時多雲</p>
                                        <p><IoIosUmbrella />10%</p>
                                    </div>
                                    {/* 第三欄 */}
                                    <div className="col2">
                                        <p>2日</p>
                                        <p>
                                            上午6:00
                                            <br />
                                            ~
                                            <br />
                                            下午6:00
                                        </p>
                                        <p>
                                            <img src="images/weatherIcon/晴時多雲.svg" alt="" />
                                        </p>
                                        <p>晴時多雲</p>
                                        <p><IoIosUmbrella />10%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 第二欄 */}
                    <div className="col">
                        {/* 卡片樣式 */}
                        <div className="card">
                            {/* 標題 */}
                            <div className="card-title">台北市</div>
                            {/* 內容 */}
                            <div className="card-body">
                                {/* 一列三欄 */}
                                <div className="row2">
                                    {/* 第一欄 */}
                                    <div className="col2">
                                        <p>2日</p>
                                        <p>
                                            上午6:00
                                            <br />
                                            ~
                                            <br />
                                            下午6:00
                                        </p>
                                        <p>
                                            <img src="images/weatherIcon/晴時多雲.svg" alt="" />
                                        </p>
                                        <p>晴時多雲</p>
                                        <p><IoIosUmbrella />10%</p>
                                    </div>
                                    {/* 第二欄 */}
                                    <div className="col2">
                                        <p>2日</p>
                                        <p>
                                            上午6:00
                                            <br />
                                            ~
                                            <br />
                                            下午6:00
                                        </p>
                                        <p>
                                            <img src="images/weatherIcon/晴時多雲.svg" alt="" />
                                        </p>
                                        <p>晴時多雲</p>
                                        <p><IoIosUmbrella />10%</p>
                                    </div>
                                    {/* 第三欄 */}
                                    <div className="col2">
                                        <p>2日</p>
                                        <p>
                                            上午6:00
                                            <br />
                                            ~
                                            <br />
                                            下午6:00
                                        </p>
                                        <p>
                                            <img src="images/weatherIcon/晴時多雲.svg" alt="" />
                                        </p>
                                        <p>晴時多雲</p>
                                        <p><IoIosUmbrella />10%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default App