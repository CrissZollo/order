const Orders = () => {

    let text = "";
    let orderArr = [];

    function convertCsv() {
        let splitArr = text.split(", ");

        for (let i = 0; i < splitArr.length; i += 2) {
            orderArr.push({
                name: splitArr[i],
                time: parseInt(splitArr[i + 1])
            });
        }

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
            <button onClick={convertCsv}>Submit</button>
        </div>
    )

}

export default Orders
