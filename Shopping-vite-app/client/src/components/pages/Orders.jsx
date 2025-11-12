import React from 'react';

export const Orders = ({ orders = [] }) => {
  if (!orders.length) return <div><h2>Orders</h2><p>No orders yet.</p></div>;
  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(o => (
          <li key={o.id}>Order #{o.id} - {o.items?.length || 0} items - ${o.total}</li>
        ))}
      </ul>
    </div>
  );
};
