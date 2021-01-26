function Fifo({ orderArr }) {

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

            return listArr
        }
    }

    const waitingList = new LinkedList();
    const workingList = new LinkedList();



    orderArr.forEach(order => {
        waitingList.addJob({ name: order.name, time: order.time });
    });


    return (
        <div className="box">
            <h2>FIFO: {waitingList.numberOfJobsInQueue()}</h2>
            {waitingList.listJobs().map((job) => <p key={waitingList.size--}>{job.name + " " + job.time}</p>)}
            {/* <button onClick={ll.addJob()}>Add Defualt Job</button> */}
            <br />
            <h2>Working: {workingList.numberOfJobsInQueue()}</h2>
            {workingList.listJobs().map((job) => <p key={waitingList.size--}>{job.name + " " + job.time}</p>)}
        </div>
    )
}

export default Fifo
