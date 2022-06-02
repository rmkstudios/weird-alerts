import "./App.css";
import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Homepage from "./Components/Homepage";
import Header from "./Components/Header";
import IndividualCoin from "./Components/IndividualCoin";
import HighCirculation from "./Components/HighCirculation";

function App() {
  const [data, setData] = useState([]);
  const [movers, setMovers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  let url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&page=1";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(false);
      try {
        const request = await axios.get(url);
        const coins = [...request.data];
        const cloneCoins = [...request.data];
        cloneCoins.sort((a, b) =>
          a.price_change_percentage_24h < b.price_change_percentage_24h ? 1 : -1
        );
        setData(coins);
        setMovers(cloneCoins);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log("There has been an error");
      }
    }
    fetchData();
  }, [url]);

  useEffect(() => {
    document.title = "Weird Alerts - Keep Your Eye On Crypto Movement";
  });

  return (
    <Router>
      <AppContext.Provider
        value={{
          data,
          setData,
          movers,
          setMovers,
          loading,
          setLoading,
          error,
          setError,
          subscribed,
          setSubscribed,
        }}
      >
        <div className="app">
          <Header />
          <main>
            <div className="wrapper">
              <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route
                  path="/coins/:coinID"
                  element={<IndividualCoin />}
                ></Route>
                <Route
                  path="/highcirculation"
                  element={<HighCirculation />}
                ></Route>
              </Routes>
            </div>
          </main>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
