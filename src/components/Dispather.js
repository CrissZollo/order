import { Fifo } from "./Fifo";
import { useState } from 'react';

const Dispather = ({ orderArr }) => {

    // let fifoList = new Fifo();

    let [fifoList, setFifoList] = useState(new Fifo());

    function useTimer() {
        let count = 0;
        const timer = setInterval(() => {
            if (count === orderArr.length) {
                clearInterval(timer)
                return;
            }
            fifoList.insertLast(orderArr[count]);
            // console.log(fifoList.printListData())
            // console.log("--------------------------------------")
            setFifoList(fifoList);
            console.log(fifoList);
            count++;
        }, 1000)
    }

    return (
        <div>
            <ul>
                {orderArr.map((order) => <h4 key={order.id}>{order.name + " " + order.time}</h4>)}
                <br />
                <button onClick={useTimer}>Start Working!</button>
                <div className="box">
                    <h2>FIFO:</h2>
                    <Fifo />
                    {fifoList.printListData() ? fifoList.printListData().map((order) => <p key={fifoList.size + orderArr.length}>{order.name + " " + order.time}</p>) : "Empty"}
                </div>
            </ul>
        </div>
    )

}

export default Dispather
