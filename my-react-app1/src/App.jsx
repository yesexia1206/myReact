import { useState } from "react"

function App() {

  const [inputUserName, setInputUserName] = useState("文字");
  const [selCity, setSelCity] = useState("");
  const cityArr = ["台北市", "桃園市", "宜蘭市", "台中市", "高雄市"];

  //閱讀確認
  const [check, setCheck] = useState(false);

  //複選:多個核取方塊
  const [chkList, setChkList] = useState([]);
  const listArr = ["HTML", "CSS", "JS"];

  //建立函式處理被勾選的項目
  const handleChkList = (e) => {
    // console.log(e.target.value);
    //使用其餘運算子保留已經被勾選的項目+目前被勾選的項目
    //檢查是否被勾選
    if (e.target.checked) {
      //是 =>原本+新的
      setChkList([...chkList, e.target.value]);
    }
    else {
      //否 =>從原本被勾選的項目中，拿掉不要的(filter)
      setChkList(
        chkList.filter((list) => {
          return list !== e.target.value
        })
      );
    }
  }

  //選項按鈕
  const[isAge,setIsAge]=useState('');

  return (
    <>
      <h1>react-表單</h1>
      <hr />
      {/* input */}
      <label htmlFor="username">使用者名稱:</label>
      <input type="text" id="username"
        value={inputUserName}
        onChange={(e) => {
          setInputUserName(e.target.value);
        }}
      />{inputUserName}
      <br />
      <hr />
      {/* select */}
      <label htmlFor="city">縣市名</label>
      <select name="" id="city"
        value={selCity}
        onChange={(e) => {
          setSelCity(e.target.value);
        }}
      >
        {/* disabled =>無法使用(失能/失效) */}
        <option value="" disabled>請選擇</option>
        {/* 逐行寫法 */}
        {/* 
        <option value="台北市">台北市</option>
        <option value="桃園市">桃園市</option>
        <option value="宜蘭市">宜蘭市</option>
        <option value="台中市">台中市</option>
        <option value="高雄市">高雄市</option> 
        */}

        {/* 陣列寫法 */}
        {
          cityArr.map((city) => {
            return <option value={city} key={city}>{city}</option>
          })
        }
      </select>{selCity}
      <br />
      <hr />
      {/* 單一核取方塊 */}
      <label htmlFor="isCheck">閱讀確認</label>
      <input type="checkbox" id="isCheck"
        value={check}
        onChange={(e) => {
          //處理勾選值得變化
          setCheck(e.target.checked);
        }} />{check.toString()}

      <br />

      {/* 複選:多個核取方塊 */}
      {
        listArr.map((list) => {
          return <div key={list}>
            <input type="checkbox" id={list} name="like" value={list}
              onChange={handleChkList} />
            <label htmlFor={list}>{list}</label>
          </div>
        })
      }
      {/* 
      <label htmlFor="chkList1">HTML</label>
      <input type="checkbox" id="chkList1" name="like" value="HTML"
        onChange={handleChkList} />
      <label htmlFor="chkList2">CSS</label>
      <input type="checkbox" id="chkList2" name="like" value="CSS"
        onChange={handleChkList} />
      <label htmlFor="chkList3">JS</label>
      <input type="checkbox" id="chkList3" name="like" value="JS"
        onChange={handleChkList} /> 
      */}

      <br />
      {chkList}

      <br />
      <hr />
      {/* 選項按鈕 */}
      滿18
      <input type="radio" name="age" value="是" id="yes" 
      onChange={(e)=>{
        setIsAge('Y');
      }} />
      <label htmlFor="yes">是</label>
      <input type="radio" name="age" value="否" id="no"
      onChange={(e)=>{
        setIsAge('N');
      }} />
      <label htmlFor="no">否</label>
      <br />
      {isAge}

    </>
  )
}

export default App