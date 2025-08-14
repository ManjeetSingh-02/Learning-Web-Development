import { useCartStore } from './stores/cartStore';

function App() {
  const { cart, addToCart, removeFromCart, clearCart } = useCartStore();

  return (
    <>
      <h1>Zustand</h1>
      <h2>Cart Items: {cart.length}</h2>
      <button onClick={() => addToCart(2)}>add</button>
      <button onClick={clearCart}>clear</button>
      <button onClick={removeFromCart}>remove</button>

      <ul>
        <h2>Items:</h2>
        {cart.map((item, index) => (
          <li key={index}>Item {item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
