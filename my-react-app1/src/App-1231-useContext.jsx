
import { createContext, useContext, useState } from "react";
import "./App.css";

export default function App() {
    //跨元件的變數使用createContext, useContext

    //建立共用環境區域
    const UserContext = createContext({});

    //建立使用者變數
    const [username, setUsername] = useState('demo');
    //建立登入鈕控制
    const [isLogin, setIsLogin] = useState(false);

    //建立登入元件
    const LoginForm = () => {
        //因為要被放在共用區，所以要搬到App元件內
        //const [username, setUsername] = useState('');
        //從共用區UserContext解構出username，setUsername
        const { username, setUsername, setIsLogin } = useContext(UserContext);
        return (
            <>
                <label htmlFor="username">使用者名稱</label>
                <input
                    type="text"
                    id="username"
                    placeholder="請輸入使用者名稱"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="button" onClick={() => { setIsLogin(true) }}>登入</button>
            </>
        )
    }

    //登入後的歡迎元件
    const Greeting = () => {
        //從共用區UserContext取得username
        const { username, setIsLogin } = useContext(UserContext);
        return (
            <div>
                Hi,{username}
            </div>
        )
    }

    //建立一個不同元建來使用username
    // const ShowName = () => {
    //   return <div>我是ShowName元件測試,{username}</div>
    // }

    return (
        <>
            <h1>useContext</h1>
            <hr style={{ marginBottom: "50px" }} />
            <UserContext.Provider value={{ username, setUsername, setIsLogin }}>
                {/* 
        <LoginForm />
        <br />
        <Greeting /> 
        */}

                {/* 將原本的結構改成三元運算子 */}
                {
                    isLogin ? <Greeting /> : <LoginForm />
                }
            </UserContext.Provider>
        </>
    )

}
