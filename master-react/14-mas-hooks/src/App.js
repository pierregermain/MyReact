import './App.css';
import { MayusComponente } from './components/MayusComponente';
import { UseIdComponent } from './components/UseIdComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseIdComponent></UseIdComponent>
        <MayusComponente></MayusComponente>
      </header>
    </div>
  );
}

export default App;
