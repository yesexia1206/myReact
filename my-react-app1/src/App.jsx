import "./style-text-1112.css"

function App() {

  return (
    <>
      
        <div className="ad">
          <img src="images/banner.jpg" alt="頁首廣告" />
        </div>
        <section className="feature">
          <div>
            <h2>教學影音</h2>
            <p>教學影音教學影音教學影音教學影音教學影音教學影音教學影音</p>
            </div>
          <div>
            <h2>良性互動</h2>
            <p>良性互動良性互動良性互動良性互動良性互動良性互動良性互動</p>
            </div>
          <div>
            <h2>趨勢分享</h2>
            <p>趨勢分享趨勢分享趨勢分享趨勢分享趨勢分享趨勢分享趨勢分享</p>
            </div>
        </section>
        <div className="solgan">
          <h2>讓學習成為一種習慣</h2>
        </div>
        <section className="curriculum">
            <h2>推薦課程</h2>
          <div className="Class">
            <div className="list">
              <img src="images/unity.jpg" alt="unity5課程" />
              <h2>Unity5</h2>
              <p className="p-blue">Unity5Unity5Unity5</p>
              <p>講師:Unity</p>
              <p>影音課程時數:4小時</p>
              <p><span className="span1">原價NT$1600</span><span className="span2">NT$1200</span></p>
              <button>付款上課去</button>
            </div>

            <div className="list">
              <img src="images/gamesalad.jpg" alt="gamesalad課程" />
              <h2>Gamesalad 2D 遊戲製作</h2>
              <p className="p-blue">gamesaleadgamesalead</p>
              <p>講師:gamesalead</p>
              <p>影音課程時數:8小時</p>
              <p><span className="span1">原價NT$3200</span><span className="span2">NT$1600</span></p>
              <button>付款上課去</button>
            </div>

            <div className="list">
              <img src="images/gwd.jpg" alt="gwd課程" />
              <h2>Google Web Design</h2>
              <p className="p-blue">gwdgwdgwd</p>
              <p>講師:google</p>
              <p>影音課程時數:8小時</p>
              <p><span className="span1">原價NT$3200</span><span className="span2">NT$1600</span></p>
              <button>付款上課去</button>
            </div>
          </div>
        </section>
      
      <footer><h2>劉哲宇</h2></footer>
    </>
  )
}

export default App
