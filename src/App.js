import { useState } from 'react';
import Orders from "./components/Orders";

function App() {
  const [allOrders, setOrders] = useState()


  return (
    <div className="App">

      <Orders array={allOrders} />
    </div>
  );
}

export default App;
