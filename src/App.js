import logo from './logo.svg';
import './App.css';
import Component1 from './components/component1/component1';
import Component2 from './components/component2/component2';
import UseEffectEx from './components/useEffectExample/useEffectEx';
import Booklist from './components/books';
import OrderList from './components/orderList.js/OrderList';
import { useState } from 'react/cjs/react.development';

function App() {
  const [books, setBooks] = useState(Booklist)

  function orderBooksByRating() {
    console.log('order books was clicked')
    let orderBooks = [...books].sort((a,b) => a.rating - b.rating);
    setBooks(orderBooks);
  }

  function orderBooksByDate() {
    console.log('order books by date was clicked');
    let orderedBooks = [...books].sort((a, b) => new Date(a.datePub) - new Date(b.datePub));
    setBooks(orderedBooks);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Component1 />
      <Component2 />
      <UseEffectEx />
      <button onClick={orderBooksByRating}> Order Da Books By Rating </button>
      <button onClick={orderBooksByDate}> Order Da Books By Date </button>
      <OrderList books={books} />
    </div>
  );
}

export default App;