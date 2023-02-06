import './App.css';
import { MayusComponente } from './components/MayusComponente';
import { UseIdComponent } from './components/UseIdComponent';
import { MiFormulario } from './components/MiFormulario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="section">
          <UseIdComponent></UseIdComponent>
        </div>
        <div className="section">
        <MayusComponente></MayusComponente>
        </div>
        <div className="section">
        <MiFormulario></MiFormulario>
        </div>
      </header>
    </div>
  );
}

export default App;
