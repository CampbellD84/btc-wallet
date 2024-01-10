import { useEffect, useState } from "preact/hooks";
import axios from "axios";
import "./app.css";

export function App() {
  const [price, setPrice] = useState(null);

  const getPrice = () => {
    axios
      .get("https://api.coinbase.com/v2/prices/BTC-USD/spot")
      .then((res) => {
        setPrice(res.data.data.amount);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getPrice();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header>
        <h1>Pleb Wallet</h1>
      </header>
      {/* <Buttons /> */}
      <div className="row">
        <div className="balance-card">
          <h2>Balance</h2>
          {/* <p>{ balance } sats</p> */}
        </div>
        <div className="balance-card">
          <h2>Price</h2>
          <p>${price}</p>
        </div>
      </div>
      <div className="row">
        <div className="row-item">
          {/* <Transactions transactions={transactions} /> */}
        </div>
        <div className="row-item">{/* <Chart chartData={chartData} /> */}</div>
      </div>
      <footer>
        <p>Made by plebs, for plebs.</p>
      </footer>
    </div>
  );
}
