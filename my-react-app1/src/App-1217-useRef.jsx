
import { useEffect, useRef, useState } from "react";
import $ from 'jquery';
import "./App.css";

export default function App() {

    //useState() => 用於即時
    //useRef() => 用於非即時處理

    // const [value, setValue] = useState('');
    //建立一個useRef的變數
    const inputRef = useRef(null);

    const submitHandler = () => {
        //console.log(value);

        //查看值
        console.log(inputRef.current.value);
        //查看類型
        console.log(inputRef.current.type);
        //更改類型為password
        inputRef.current.type = "password";
        //查看類型
        console.log(inputRef.current.type);
    }

    return (
        <>
            {/* useState() 搭配 onChange() */}
            {/* <input type="text" onChange={(e) => setValue(e.target.value)} /> */}
            <input type="text" ref={inputRef} />
            <button onClick={submitHandler}>送出</button>
        </>
    )
}
