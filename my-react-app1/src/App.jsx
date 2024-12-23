import { useEffect, useState } from "react";
import "./App.css";

export default function App() {

  //建立目前背景圖的變數
  const [currentImgindex, setCurrentImgindex] = useState(0);

  //建立輪播圖片的陣列物件
  const slides = [
    { url: "./images/06.jpg" ,title:"第一張圖"},
    { url: "./images/07.jpg" ,title:"第二張圖"},
    { url: "./images/08.jpg" ,title:"第三張圖"},
    { url: "./images/09.jpg" ,title:"第四張圖"},
  ]

  //當currentImgindex改變時，會觸發useEffect
  useEffect(() => {
    //每3秒呼叫nextSlide()換下一張圖
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);

    //每3秒後，移除autoplay，這樣才能取得最新的索引編號
    return () => clearInterval(autoplay);
  }, [currentImgindex])

  //下一張
  const nextSlide = () => {
    //取得前一張的索引編號，檢查是否為最後一個編號 prevIndex === slides.length - 1
    //是=>回到第一張 0
    //否=>跳到下一張 prevIndex + 1
    setCurrentImgindex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <>
      {/* 最外層 */}
      <div className="wrapper" style={{
        maxWidth: "100vw",  //用width:"100vw"，100vw包含右卷軸範圍，會超出有下卷軸出現，所以用maxWidth
        height: "100vh",
        margin: "auto",
      }}>
        {/* 滿版背景輪播區 */}
        <div style={{
          backgroundImage: `url(${slides[currentImgindex].url})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          margin: "auto",
          color:"white",
          fontSize:"50px",
          textAlign:"center",
        }}>
          {slides[currentImgindex].title}
          {/* <img src={slides[0].url} alt="" style={{maxWidth:"100vw"}}/> */}
        </div>
      </div>
    </>
  )
}
