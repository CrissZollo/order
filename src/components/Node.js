import React from 'react'

export class Node extends React.Component {


    constructor(data, next = null) {
        super();
        this.data = data;
        this.next = next;
    }
}

export default Node
