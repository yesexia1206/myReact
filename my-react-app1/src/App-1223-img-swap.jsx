import img1 from '/images/01.jpg';
import img2 from '/images/02.jpg';
import img3 from '/images/03.jpg';
import img4 from '/images/04.jpg';

import "./App.css";
import { useState } from 'react';

export default function App() {

    //建立圖片陣列
    const arrPhotos = [img1, img2, img3, img4];

    //建立目前縮圖的變數
    const [currentImgindex, setCurrentImgindex] = useState(0);

    return (
        <>
            <div className="wrapper">
                <section style={{ display: "flex", width: "600px", justifyContent: "space-around", margin: "50px auto" }}>
                    {/* 縮圖區 */}
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                        {/* <img src={arrPhotos[0]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[1]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[2]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[3]} alt="photos" width={100} height={80} /> */}

                        {
                            arrPhotos.map((photo, index) => {
                                return (
                                    <img key={index} src={photo} alt="photos" width={100} height={80}
                                        onClick={(e) => setCurrentImgindex(index)}
                                        style={{ cursor: "pointer" }}
                                    />
                                )
                            })
                        }
                    </div>
                    {/* 大圖區 */}
                    <div>
                        <img src={arrPhotos[currentImgindex]} alt="photos" width={480} height={350} />
                    </div>
                </section>
            </div>
        </>
    )
}
