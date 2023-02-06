import './App.css';
import { MayusComponente } from './components/MayusComponente';
import { UseIdComponent } from './components/UseIdComponent';
import { MiFormulario } from './components/MiFormulario';
import { MiUsuario } from './components/MiUsuario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header2">

          <div className="section">
            <UseIdComponent></UseIdComponent>
          </div>

          <div className="section">
            <MayusComponente></MayusComponente>
          </div>
        </div>

        <div className="App-header3">

        <div className="section">
          <MiFormulario></MiFormulario>
        </div>

        <div className="section">
          <MiUsuario></MiUsuario>
        </div>

        </div>

      </header>
    </div>
  );
}

export default App;
