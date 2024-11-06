import MyComponent from "./component/MyComponent"

function MyComponent2() {
  return(
    //空標籤<></> :Fragment
    <>
    <h1>元件2</h1>
    <p>546545446</p>
    </>
  ) 
}

function App() {
  return (
    <div>
      <MyComponent/>
      <MyComponent2/>
    </div>
  )
}

export default App
