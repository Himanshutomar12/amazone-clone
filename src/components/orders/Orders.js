import { collection, getDocs, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Order from "./Order";
import { db, useAuth } from "../../firebase";
import "./orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const currentUser = useAuth();

  useEffect(async () => {
    if (currentUser) {
      const q = collection(db, "users", currentUser?.uid, "orders");
      const querySnapshot = await getDocs(q, orderBy("created", "desc"));
      const ordersData = querySnapshot.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setOrders(ordersData);
    } else {
      setOrders([]);
    }
  }, [currentUser]);

  return (
    <div className="orders">
      <h3>Orders History</h3>
      <div className="orders_order">
        {orders.map((order, id) => {
          console.log(order.data.basket);
          return <Order order={order} />;
        })}
      </div>
    </div>
  );
}

export default Orders;
