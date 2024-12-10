import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>首頁</Link>
                </li>
                <li>
                    <Link to='/about'>關於我們</Link>
                </li>
                <li>
                    <Link to='/news'>最新消息</Link>
                </li>
                <li>
                    <Link to='/jquery'>Jquery</Link>
                </li>
            </ul>
        </div>
    )
}