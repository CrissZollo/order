const Dispather = ({ orderArr, submitted }) => {

    function useTimer() {
        if (submitted) {
            const timer = setInterval(() => {
                console.log("Tik tok On the Clock")
            }, 1000)
            return () => clearInterval(timer);
        }
    }

    return (
        <div>
            <ul>
                {orderArr.map((order) => <li key={order.id}>{order.name + " " + order.time}</li>)}
                <br />
                <button onClick={useTimer}>Start Working!</button>
            </ul>
        </div>
    )
}

export default Dispather
