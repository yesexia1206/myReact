import { useEffect, useRef, useState } from "react";
import './App.css';

export default function App() {
    const [citys, setCitys] = useState([]);

    useEffect(() => {
        fetch("./json/F-C0032-001.json").then(function (response) {
            return response.json();
        })
            .then(function (data) {
                console.log(data);
                setCitys(data.cwaopendata.dataset.location);
            });
    }, []);

    return (
        <>
            <h1>AJAX</h1>
            <div>
                {
                    citys.map((citys, index) => {
                        return (
                            <p key={index}>{citys.locationName}</p>
                        )
                    })
                }
            </div>
        </>
    )
}
