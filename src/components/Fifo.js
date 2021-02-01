function Fifo({ orderArr, sendData }) {

    class Node {
        constructor(data, next = null) {
            this.data = data;
            this.next = next;
        }
    }

    class LinkedList {
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

    const ll = new LinkedList();



    // orderArr.forEach(order => {
    //     ll.addJob({ name: order.name, time: order.time });
    // });

    if (Object.keys(sendData).length !== 0) { // If sendData object is not empty         
        ll.addJob({ name: sendData.name, time: sendData.time });
    }


    // if (Object.keys(sendData).length !== 0) { // If sendData object is not empty 
    //     const interval = setInterval+(() => {
    //         if (waitingList.size === 0) {
    //             clearInterval(interval)
    //         }

    //     }, 100)
    // }


    return (
        <div className="box">
            <h2>FIFO: {ll.numberOfJobsInQueue()}</h2>
            {ll.listJobs().map((job) => <p key={ll.size--}>{job.name + " " + job.time}</p>)}
            {/* <button onClick={ll.addJob()}>Add Defualt Job</button> */}
            {/* <br />
            <h2>Working: {workingList.numberOfJobsInQueue()}</h2>
            {workingList.listJobs().map((job) => <p key={workingList.size--}>{job.name + " " + job.time}</p>)} */}
        </div>
    )
}

export default Fifo
