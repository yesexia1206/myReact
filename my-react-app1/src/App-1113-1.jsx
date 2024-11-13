import "./style-text-1112.css"
import FeatureData from './FeatureData-11-13.jsx'
import ClassList from './ClassList-11-13.jsx'

// function FeatureData() {
//   const featureData = [
//     {
//       id: 1,
//       title: "教學影音",
//       desc: "教學影音教學影音教學影音教學影音教學影音教學影音教學影音",
//     },
//     {
//       id: 2,
//       title: "良性互動",
//       desc: "良性互動良性互動良性互動良性互動良性互動良性互動良性互動",
//     },
//     {
//       id: 3,
//       title: "趨勢分享",
//       desc: "趨勢分享趨勢分享趨勢分享趨勢分享趨勢分享趨勢分享趨勢分享",
//     },
//   ]
//   return (
//     <>
//       {
//         featureData.map((item) => {
//           return (
//             //<>
//             <div key={item.id}>
//               <h2>{item.title}</h2>
//               <p>{item.desc}</p>
//             </div>
//             //</>
//           )
//         })
//       }
//     </>
//   )
// }

// function ClassList() {
//   const ClassListData = [
//     {
//       id: 1,
//       img: "images/unity.jpg",
//       alt: "unity5課程",
//       title: "Unity",
//       content: "Unity5Unity5Unity5",
//       teacher: "Unity",
//       classHr: "4",
//       price: "1600",
//       special_offer: "1200",
//     },
//     {
//       id: 2,
//       img: "images/gamesalad.jpg",
//       alt: "gamesalad課程",
//       title: "Gamesalad 2D 遊戲製作",
//       content: "gamesaleadgamesalead",
//       teacher: "gamesalead",
//       classHr: "8",
//       price: "3200",
//       special_offer: "1600",
//     },
//     {
//       id: 3,
//       img: "images/gwd.jpg",
//       alt: "gwd課程",
//       title: "Google Web Design",
//       content: "gwdgwdgwd",
//       teacher: "google",
//       classHr: "8",
//       price: "3200",
//       special_offer: "1600",
//     },
//   ]
//   return (
//     <>
//       <div className="Class">
//         {
//           ClassListData.map((item) => {
//             return (
//               //<>
//               <div className="list" key={item.id}>
//                 <img src={item.img} alt={item.alt} />
//                 <h2>{item.title}</h2>
//                 <p className="p-blue">{item.content}</p>
//                 <p>講師:{item.teacher}</p>
//                 <p>影音課程時數:{item.classHr}小時</p>
//                 <p><span className="span1">原價NT${item.price}</span><span className="span2">NT${item.special_offer}</span></p>
//                 <button>付款上課去</button>
//               </div>
//               //</>
//             )
//           })
//         }
//       </div>
//     </>
//   )
// }

function App() {
    return (
        <>
            <div className="ad">
                <img src="images/banner.jpg" alt="頁首廣告" />
            </div>
            {/* 特色區 */}
            <section className="feature">
                <FeatureData />
            </section>
            <div className="solgan">
                <h2>讓學習成為一種習慣</h2>
            </div>
            {/* 課程區 */}
            <section className="curriculum">
                <h2>推薦課程</h2>
                <ClassList />
                {/* <div className="Class">
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
        </div> */}
            </section>

            <footer><h2>劉哲宇</h2></footer>
        </>
    )
}

export default App
