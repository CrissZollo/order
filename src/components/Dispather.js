import { useState } from "react";

const Dispather = ({ orderArr, submitted }) => {

    let [time, setTime] = useState(0);


    function useTimer() {
        if (submitted) {
            const timer = setInterval(() => {
                time++;
                setTime(time)
            }, 1000)
            return () => clearInterval(timer);
        }
    }

    return (
        <div>
            <ul>
                {orderArr.map((order) => <li key={order.id}>{order.name + " " + order.time}</li>)}
                <br />
                <button onClick={useTimer}>Start Working!</button>
                <h2>StopWatch Time: {time}</h2>
            </ul>
        </div>
    )
}

export default Dispather
