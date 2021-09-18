import logo from './logo.svg';
import './App.css';
import Component1 from './components/component1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Component1 />
    </div>
  );
}

export default App;
