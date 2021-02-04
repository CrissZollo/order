import { useState } from "react";

const Dispather = ({ orderArr }) => {



    // let [sendingData, setData] = useState({});

    let [stopValue, setStopValue] = useState(0)




    //const [fifoList, setFifoList] = useState(new Fifo());


    function useTimer() {
        stopValue += orderArr.length + 1;
        const timer = setInterval(() => {
            if (time === stopValue) {
                setStopValue(stopValue)
                // setFifoList(fifoList);
                clearInterval(timer)
                return;
            }
            fifoList.addJob(orderArr[orderArr.length - (time + 1)]);
            orderArr.pop();
            time++;
        }, 1000)
    }

    return (
        <div>
            <ul>
                {orderArr.map((order) => <h4 key={order.id}>{order.name + " " + order.time}</h4>)}
                <br />
                <button onClick={useTimer}>Start Working!</button>
                <h2>Stopwatch Time: {time}</h2>
                {/* <Fifo orderArr={orderArr} sendData={sendingData} /> */}
                <div className="box">
                    <h2>FIFO: {fifoList.numberOfJobsInQueue()}</h2>
                    {fifoList.listJobs().map((job) => <p key={fifoList.numberOfJobsInQueue()}>{job.name + " " + job.time}</p>)}
                </div>
            </ul>
        </div>
    )

}

export default Dispather
