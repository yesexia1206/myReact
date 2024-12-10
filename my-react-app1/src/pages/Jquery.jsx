import $ from 'jquery'

export default function Jquery() {
    return (
        <div>
            <h2>Jquery</h2>
            <button onClick={() => {
                console.log($('h2').text());
            }
            }>click</button>
        </div>
    )
}