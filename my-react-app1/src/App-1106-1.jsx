import MyComponent from "./component/MyComponent"
import "./App.css"

function MyComponent2() {
    return (
        //空標籤<></> :Fragment
        <>
            <h2>元件2</h2>
            <p>546545446</p>
        </>
    )
}

function App() {

    //建立變數
    const strName = "米蒂";
    const strabc = "abc";

    return (
        <div>
            {/* JSX中使用javascript變數，前後加大括號{變數名稱} */}
            <h1 className="myH1" style={{
                color: 'red',
                backgroundColor: 'yellow',
                width: '300px',
            }}>晚安{strName},{strabc.toUpperCase()}</h1>

            {/* 屬性中使用變數 */}
            <label htmlFor="userName">請輸入姓名：</label>
            {/* placeholder =>提示字 */}
            <input type="text" id="userName" placeholder={strName} />

            {/* 外部元件 <MyComponent/> */}
            <MyComponent />
            {/* 內部函式 <MyComponent2/> */}
            <MyComponent2 />
        </div>
    )
}

export default App
