
function App() {

    //建立函式方法1
    function sayHi() {
        alert('Hi3')
    }

    //建立函式方法2
    const sayHi2 = () => {
        alert('Hi4')
    }


    return (

        <div>
            {/* 事件處理1:在HTML邊謙上绑定事件 */}
            <button onClick={
                //匿名函式
                function () { alert('Hi') }}>按鈕</button>

            <button onClick={
                //箭頭函式
                () => { alert('Hi2') }}>按鈕2</button>

            {/* 事件處理2:呼叫函式 */}
            {/* 等待被呼叫的函式，函式名稱後面不可加上 () */}
            <button onClick={sayHi}>按鈕3</button>
            <button onClick={sayHi2}>按鈕4</button>

        </div>

    )
}

export default App
