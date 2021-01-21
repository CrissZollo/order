import { useState } from 'react';

const Orders = () => {

    let text = "";
    // const orderArr = [];

    const [orderArr, setOrders] = useState([])


    function dataprocessor() {
        let splitArr = text.split(", ");

        for (let i = 0; i < splitArr.length; i += 2) {
            orderArr.push({
                id: i / 2,
                name: splitArr[i],
                time: !isNaN(parseInt(splitArr[i + 1])) ? parseInt(splitArr[i + 1]) : 0
            });



        }

        setOrders([...orderArr, { date: 12 }])
        console.log(text);
        console.log(splitArr);
        console.log(orderArr.length);
        console.log(orderArr);

    }

    function getValue(e) {
        text = e.target.value;
    }

    return (
        <div>
            <h1>Orders</h1>
            <h4>Example: Tomato, 50, Potato, 150, .....</h4>
            <input type="text" onChange={getValue} />
            <button onClick={dataprocessor}>Submit</button>
            <ol>
                {orderArr.map((order) => <li key={order.id}>{order.name + " " + order.time}</li>)}
            </ol>
        </div>
    )

}


export default Orders
