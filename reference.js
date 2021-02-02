class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class FifoList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Numbers of jobs left
    length() {
        return this.size;
    }

    //Insert last Node
    insertLast(data) {
        let node = new Node({
            name: data.name,
            time: data.time
        });
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
    removeAt(index) {
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

    //Clear list
    clearList() {
        this.head = null;
    }

    //Print list data
    printListData() {
        let current = this.head;
        let listArr = [];

        if (this.head == null) {
            return console.log("Empty");
        }

        // console.log(current);
        while (current != null) {
            console.log(current.data);
            listArr.push(current.data);
            current = current.next;
        }

        // return listArr
    }
}

class LifoList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Numbers of jobs left
    length() {
        return this.size;
    }

    //insert first Node
    insertFirst(data) {
        this.head = new Node({
            name: data.name,
            time: data.time
        }, this.head);
        this.size++;
    }

    //Remove at Index
    removeAt(index) {
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

    //Clear list
    clearList() {
        this.head = null;
    }

    //Print list data
    printListData() {
        let current = this.head;
        let listArr = [];

        if (this.head == null) {
            return console.log("Empty");
        }

        // console.log(current);
        while (current != null) {
            console.log(current.data);
            listArr.push(current.data);
            current = current.next;
        }

        // return listArr
    }
}

class CirkleList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Numbers of jobs left
    length() {
        return this.size;
    }

    //Insert last Node
    insertLast(data) {
        let node = new Node({
            name: data.name,
            time: data.time
        }, this.head);
        let current;

        // If empty, make head the node
        // console.log(this.head)

        if (this.head == null) {
            this.head = node;
            this.head.next = this.head

        } else {
            current = this.head;

            if (this.length() > 1) {
                while (current.next != this.head) {
                    current = current.next;
                }
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

    //Clear list
    clearList() {
        this.head = null;
    }

    //Print list data
    printListData() {
        let current = this.head;
        let listArr = [];

        if (this.length() > 1) {
            while (current.next != this.head) {
                console.log(current.data);
                listArr.push(current.data);
                current = current.next;
            }
        } else {
            console.log(current.data)
            listArr.push(current.data);
        }

        // return listArr
    }
}

class DoubleList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Numbers of jobs left
    size() {
        return this.size;
    }

    //insert first Node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //Insert last Node
    insertLast(data) {
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
        // If index is out of range
        if ((index > 0 && index > this.size) || index < 0) {
            console.error("Index Out Of Range");
            return;
        }

        // if first index
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

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

    //Clear list
    clearList() {
        this.head = null;
    }

    //Print list data
    printListData() {
        let current = this.head;
        let listArr = [];

        console.log(current);
        while (current != null) {
            console.log(current.data);
            listArr.push(current.data);
            current = current.next;
        }

        // return listArr
    }
}

const fifoList = new FifoList();
const lifoList = new LifoList();
const cirkleList = new CirkleList();
const doubleList = new DoubleList();

let csv = "Tomato, 50, Potato, 12, Pepper, 47, Chili, 15, Orange, 23";

let splitArr = csv.split(", ");
let orderArr = [];

for (let i = 0; i < splitArr.length; i += 2) {
    orderArr.push({
        name: splitArr[i] === "" ? "Empty" : splitArr[i],
        time: !isNaN(parseInt(splitArr[i + 1])) ? parseInt(splitArr[i + 1]) : 0
    });
}

console.log(orderArr);
let count = 0;
const time = 10;

const interval = setInterval(() => {

    if (count < orderArr.length) {
        fifoList.insertLast(orderArr[count]);
        lifoList.insertFirst(orderArr[count]);
        cirkleList.insertLast(orderArr[count]);
    }

    // cirkleList.printListData()


    // console.log("Fifo List")
    // if (fifoList.length() > 0) {
    //     fifoList.head.data.time -= time;

    //     if (fifoList.head.data.time <= 0) {
    //         fifoList.removeAt(0)
    //     }
    //     // console.log(fifoList.head.data.time);
    //     fifoList.printListData();
    // }

    // console.log("----------------------------------------------------");

    // console.log("Lifo List:")
    // if (lifoList.length() > 0) {
    //     lifoList.head.data.time -= time;

    //     if (lifoList.head.data.time <= 0) {
    //         lifoList.removeAt(0)
    //     }

    //     // console.log(lifoList.head.data.time);
    //     lifoList.printListData();
    // }

    // console.log("----------------------------------------------------");

    // console.log("Circle List:")
    // if (cirkleList.length() > 0) {
    //     let current = cirkleList.head;
    //     for (let i = 0; i < cirkleList.length(); i++) {
    //         current.data.time -= (time / cirkleList.length())
    //     }

    //     if (cirkleList.head.data.time <= 0) {
    //         cirkleList.removeAt(0)
    //     }

    //     // console.log(cirkleList.head.data.time);
    //     cirkleList.printListData();
    // }

    cirkleList.printListData();
    console.log("----------------------------------------------------");


    count++;

    if (fifoList.length() <= 0 && lifoList.length() <= 0) {
        clearInterval(interval);
        return;
    }

}, 1000);