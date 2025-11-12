import React, { useState } from 'react';
import { Header } from './Header.jsx';

// Very basic demo products (id, name, price)
const initialProducts = [
  { id: 1, name: 'Apple', price: 1 },
  { id: 2, name: 'Banana', price: 2 },
  { id: 3, name: 'Orange', price: 3 }
];

export const UserDashboard = () => {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]); // [{id, name, price, qty}]

  const addToCart = (p) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === p.id);
      if (existing) {
        return prev.map(item => item.id === p.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...p, qty: 1 }];
    });
  };

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div>
      <Header />
      <h1>Shop</h1>
      <p>Products:</p>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ${p.price} <button onClick={() => addToCart(p)}>Add</button>
          </li>
        ))}
      </ul>
      <h2>Cart Summary</h2>
      <p>Items: {totalItems}</p>
      <p>Total: ${totalPrice}</p>
      {cart.length > 0 && (
        <ul>
          {cart.map(c => (
            <li key={c.id}>{c.name} x {c.qty} = ${c.price * c.qty}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserDashboard;
