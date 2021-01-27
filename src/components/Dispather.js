import { useState } from "react";
import Fifo from './Fifo';

const Dispather = ({ orderArr, submitted }) => {

    let [time, setTime] = useState(0);

    let [sendingData, setData] = useState({});

    function useTimer() {
        if (submitted) {
            const timer = setInterval(() => {
                if (orderArr.length === 0) {
                    clearInterval(timer)
                    return;
                }
                setTime(time);
                sendingData = orderArr[orderArr.length - 1];
                setData(sendingData);
                orderArr.pop();
                time++;
            }, 1000)
        }
    }

    return (
        <div>
            <ul>
                {/* {orderArr.map((order) => <li key={order.id}>{order.name + " " + order.time}</li>)} */}
                <br />
                <button onClick={useTimer}>Start Working!</button>
                <h2>StopWatch Time: {time}</h2>
                <Fifo orderArr={orderArr} sendData={sendingData} />
            </ul>
        </div>
    )

}

export default Dispather
