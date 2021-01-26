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

        //insert first Node
        insertFirst(data) {
            this.head = new Node(data, this.head);
            this.size++;
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

        //Insert at Index
        insertAt(data, index) {

        }

        //Get at Index

        //Remove at Index
        removeJob() {

        }

        //Clear list
        clearList() {
            this.head = null;
        }

        //Print list data
        printListData() {
            let current = this.head;
            let listArr = [];

            while (current != null) {
                console.log(current.data);
                listArr.push(current.data);
                current = current.next;
            }

            return listArr
        }
    }

    const ll = new LinkedList();

    orderArr.forEach(order => {
        ll.addJob({ name: order.name, time: order.time });
    });

    return (
        <div className="box">
            <h2>FIFO</h2>
            {ll.printListData().map((job) => <p key={ll.size--}>{job.name + " " + job.time}</p>)}
        </div>
    )
}

export default Fifo
