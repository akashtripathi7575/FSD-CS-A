import React from 'react';

export const Cart = ({ items = [] }) => {
  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  if (!items.length) return <div><h2>Cart</h2><p>No items in cart.</p></div>;
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map(it => (
          <li key={it.id}>{it.name} x {it.qty} = ${it.price * it.qty}</li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};
