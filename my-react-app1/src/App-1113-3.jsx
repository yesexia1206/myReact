import { useState } from "react"

function App() {
    //定義變數name與setName方法
    // const[變數名稱,更改變數的方法]=useState(初始值);
    const [name, setName] = useState('');
    const [name1, setName1] = useState('');

    function changeName(e) {
        setName1(e.target.value);
    }

    return (
        <>
            <h1>設計一個輸入名字的欄位，並且即時顯示出來</h1>
            <hr />
            <h2>目前文字方塊的內容:{name}</h2>
            {/* 箭頭函式 */}
            請輸入姓名:<input type="text" value={name} onChange={(e) => {
                // console.log(e); event
                setName(e.target.value);
            }} />

            <br />

            <h2>目前文字方塊的內容:{name1}</h2>
            {/* 呼叫函式 */}
            請輸入姓名1:<input type="text" value={name1} onChange={changeName} />

            <br />

        </>
    )
}

export default App