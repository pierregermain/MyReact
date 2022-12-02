import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hello World!</h1>
        {/* Carga de mi primer componente */}
        <div className='mis-componentes'>
          <MiComponente />
          <hr></hr>
          <SegundoComponente />
        </div>
      </header>
    </div>
  );
}

export default App;
