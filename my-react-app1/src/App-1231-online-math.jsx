
import { useState } from "react";
import "./App.css";

export default function App() {

    //單價變數
    const [price, setPrice] = useState(100);

    //數量變數
    const [qty, setQty] = useState(1);

    //總價變數
    const tot = price * qty;

    return (
        <>
            <h1>useMemo介紹</h1>
            <hr style={{ marginBottom: "50px" }} />

            <label htmlFor="price">單價 : </label>
            <input id="price" type="number" value={price} onChange={(e) => { if (e.target.value >= 0) { setPrice(e.target.value) } }} />
            <br />

            <label htmlFor="qty">數量 : </label>
            <input id="qty" type="number" value={qty} onChange={(e) => { if (e.target.value >= 0) { setQty(e.target.value) } }} />
            {/* if(e.target.value<=0){
        alert("err");
        setQty(1);
      }
      else{
        setQty(e.target.value);
      } */}
            <br />

            <div>
                總價 : {tot}
            </div>
        </>
    )
}
