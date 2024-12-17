
import { useRef } from "react";
import "./App.css";

export default function App() {

    const greenRef = useRef(null);
    const yellowRef = useRef(null);

    const goGreen = () => {
        window.scrollTo({
            top: greenRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    const goYellow = () => {
        window.scrollTo({
            top: yellowRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {/* offsetTop */}
            <div ref={yellowRef} style={{ height: '100vh', backgroundColor: 'yellow' }}>
                <button onClick={goGreen}>green</button>
            </div>

            <div ref={greenRef} style={{ height: '100vh', backgroundColor: 'green' }}>
                <button onClick={goYellow}>yellow</button>
            </div>
        </>
    )
}
