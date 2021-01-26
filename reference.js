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

        while (current != null) {
            console.log(current);
            listArr.push(current.data);
            current = current.next;
        }

        return listArr
    }
}

const ll = new LinkedList();