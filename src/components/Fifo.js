import React from 'react';
import Node from './Node';

export class Fifo extends React.Component {

    constructor() {
        super();
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
            listArr.push(current.data);
            current = current.next;
        }

        return listArr
    }

    render() {
        return (null)
    }

}

export default Fifo
