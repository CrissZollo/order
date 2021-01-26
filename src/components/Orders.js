import { useState } from 'react';
import Dispather from './Dispather';

const Orders = () => {

    const [text, setText] = useState("");

    const [orderArr, setOrders] = useState([])
    const [clicked, setClick] = useState(false);

    function dataprocessor() {
        let splitArr = text.split(", ");


        for (let i = 0; i < splitArr.length; i += 2) {
            orderArr.push({
                id: i / 2,
                name: splitArr[i] === "" ? "Empty" : splitArr[i],
                time: !isNaN(parseInt(splitArr[i + 1])) ? parseInt(splitArr[i + 1]) : 0
            });



        }


        setOrders([...orderArr])
        setClick(true);
    }

    function getValue(e) {
        setText(e.target.value);
    }

    return (
        <div>
            <h1>Orders</h1>
            <h4>Example: Tomato, 50, Potato, 150, .....</h4>
            <input type="text" onChange={getValue} />
            <button onClick={dataprocessor}>Submit</button>
            <Dispather orderArr={orderArr} submitted={clicked} />
        </div >
    )

}


export default Orders
