
import { useMemo, useState } from "react";
import "./App.css";

export default function App() {

  const prodData = [
    {
      id: 1,
      title: 'apple',
      price: 80,
      imgUrl: './images/01.jpg',
    },
    {
      id: 2,
      title: 'fish',
      price: 800,
      imgUrl: './images/02.jpg',
    },
    {
      id: 3,
      title: '糕點1',
      price: 200,
      imgUrl: './images/03.jpg',
    },
    {
      id: 4,
      title: '背包',
      price: 99,
      imgUrl: './images/04.jpg',
    },
    {
      id: 5,
      title: '糕點',
      price: 169,
      imgUrl: './images/06.jpg',
    },
  ];

  //建立表格元件
  const ProdTable = ({ filterProds }) => {
    return (
      <table style={{ width: '500px', marginTop: '20px' }}>
        <tbody>
          {
            filterProds.map((prod) => {
              return (
                <tr key={prod.id}>
                  <td style={{
                    borderBottom: '1px dashed #ccc',
                    padding: '5px',
                    width: '300px',
                  }}>
                    <img src={prod.imgUrl} alt="" style={{ width: '100px', verticalAlign: 'top', }} />
                    <br />
                    {prod.title}
                  </td>
                  <td style={{
                    borderBottom: '1px dashed #ccc',
                    padding: '5px',
                    width: '200px',
                    textAlign: 'right',
                  }}>{prod.price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }

  //陣列變數，預設為原商品陣列資料
  const [prods, setProdes] = useState(prodData);
  //排序變數，預設為遞增
  const [ascending, setAscending] = useState(true);
  //搜尋變數
  const [search, setSearch] = useState('');

  //建立排序與搜尋的函式
  const filterProds = useMemo(() => {
    return [...prods]
      //排序
      .sort((a, b) => {
        return ascending ? a.price - b.price : b.price - a.price;
      })
      //搜尋
      .filter((prod) => {
        return prod.title.match(search);
      })
  }, [ascending, search]);

  return (
    <>
      <h1>useMemo搜尋與排序</h1>
      <hr />
      <br />
      升降幕：
      <input
        type="checkbox"
        checked={ascending}
        onChange={(e) => setAscending(e.target.checked)}
      />
      <br />
      搜尋：
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* 呼叫表格元件 */}
      <ProdTable filterProds={filterProds} />
    </>
  )
}
