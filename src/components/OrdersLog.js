

const OrdersLog = ({ allOrders }) => {

    return (
        <div>
            <ol>
                {allOrders.map((order) => (<li key={order.id}>{order.name + " " + order.time}</li>))}
            </ol>
        </div>
    )
}


export default OrdersLog
