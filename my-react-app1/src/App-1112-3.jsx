
function App() {

    const person = {
        //建立物件變數
        name: "小明",
        age: 10
    }

    {/* 物件解構寫法 */ }
    const { name, age } = person;
    // console.log(name,age);

    return (
        <>
            {/* 一般寫法 */}
            <div>姓名:{person.name}</div>
            <div>年齡:{person.age}</div>
            <hr />
            <div>{`姓名:${person.name}`}</div>
            <div>{`年齡:${person.age}`}</div>
            <hr />
            {/* 物件解構寫法 */}
            <div>解構後的姓名:{name}</div>
            <div>解構後的年齡:{age}</div>
        </>
    )
}

export default App
