
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TopBar from "./TopBar";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get("https://zerodha-backend-18pf.onrender.com/allOrders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  };

  const handleSell = async (orderId) => {
    try {
      await axios.delete(`https://zerodha-backend-18pf.onrender.com/deleteOrder/${orderId}`);
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order._id !== orderId)
      );
      console.log("Order sold successfully!");
    } catch (error) {
      console.error("Error selling order:", error);
      alert("Failed to sell order.");
    }
  };

  return (
    <>
      <TopBar />
      <div className="dashboard-container">
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
        <div className="content">
          <div className="orders">
            {orders.length === 0 ? (
              <div className="no-orders">
                <p>You haven't placed any orders today</p>
                <Link to={"/"} className="btn">
                  Get started
                </Link>
              </div>
            ) : (
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Mode</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td>{order.name}</td>
                      <td>{order.qty}</td>
                      <td>{order.price}</td>
                      <td>{order.mode}</td>
                      <td>
                        <button
                          className="btn orders-button btn-danger"
                          onClick={() => handleSell(order._id)}
                        >
                          Sell
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
