import logo from './logo.svg';
import './App.css';
import Component1 from './components/component1/component1';
import Component2 from './components/component2/component2';
import UseEffectEx from './components/useEffectExample/useEffectEx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Component1 />
      <Component2 />
      <UseEffectEx />
    </div>
  );
}

export default App;