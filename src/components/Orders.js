import OrdersLog from "./OrdersLog";

const Orders = ({ array }) => {

    let text = "";
    let orderArr = [];

    function dataprocessor() {
        let splitArr = text.split(", ");

        for (let i = 0; i < splitArr.length; i += 2) {
            // orderArr.push({
            //     id: i / 2,
            //     name: splitArr[i],
            //     time: !isNaN(parseInt(splitArr[i + 1])) ? parseInt(splitArr[i + 1]) : 0
            // });

            array.setOrders([{
                id: i / 2,
                name: splitArr[i],
                time: !isNaN(parseInt(splitArr[i + 1])) ? parseInt(splitArr[i + 1]) : 0
            }])

        }

        //console.log(orderArr);
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
            <OrdersLog allOrders={orderArr} />
        </div>
    )

}


export default Orders
