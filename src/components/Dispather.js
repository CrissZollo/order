import { useState } from "react";

const Dispather = ({ orderArr }) => {



    // let [sendingData, setData] = useState({});

    let [stopValue, setStopValue] = useState(0)


    class Node {
        constructor(data, next = null) {
            this.data = data;
            this.next = next;
        }
    }

    class Fifo {
        constructor() {
            this.head = null;
            this.size = 0;
        }

        // Numbers of jobs left
        numberOfJobsInQueue() {
            return this.size;
        }

        //Insert last Node
        addJob(data) {
            let node = new Node(data);
            let current;

            // If empty, make head
            if (this.head == null) {
                this.head = node;

            } else {
                current = this.head;

                while (current.next != null) {
                    current = current.next;
                }

                current.next = node;
            }

            this.size++;
        }

        //Remove at Index
        removeJob(index) {
            if ((index > 0 && index > this.size) || index < 0) {
                console.error("Index Out Of Range");
                return;
            }

            let current = this.head
            let previous;
            let count = 0;

            //Remove First
            if (index === 0) {
                this.head = current.next
            } else {
                while (count < index) {
                    count++;
                    previous = current
                    current = current.next;
                }

                previous.next = current.next
            }

            this.size--;

        }

        //Print list data
        listJobs() {
            let current = this.head;
            let listArr = [];

            while (current != null) {
                listArr.push(current.data);
                current = current.next;
            }

            return listArr;
        }
    }

    const fifoList = new Fifo();




    //const [fifoList, setFifoList] = useState(new Fifo());

    let [time, setTime] = useState(0);


    function useTimer() {
        stopValue += orderArr.length + 1;
        const timer = setInterval(() => {
            if (time === stopValue) {
                setStopValue(stopValue)
                // setFifoList(fifoList);
                clearInterval(timer)
                return;
            }
            setTime(time);
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
