
// 子組件「props寫法」
// function MyComponent(props) {
//   props.c();
//   return <>
//   <div>我是子組件</div>
//   <div>{props.a}</div>
//   <div>{props.b}</div>
//   </>
// }

//子組件使用「物件解構賦值」寫法
//解構賦值的名稱必須一樣，順序可以不同
function MyComponent({ a, b = "我是預設值", c }) {

    c();
    return <>
        <div>我是子組件</div>
        <div>{a}</div>
        <div>{b}</div>
    </>
}

function App() {
    return (
        <>
            <MyComponent
                a="我是屬性a"
                // b="屬性b" 
                // 回調函式 = callback function
                c={() => { console.log("方法c") }}
            />

            {/* react屬性: props */}
            {/*
        props = properites = 屬性
        作用：從父組件傳遞資料到子組件(由上往下傳遞)

        撰寫 React 時，組件之間需要溝通時(也就是傳遞資料)
        props就可以做到這件事
     */}
        </>
    )
}

export default App
