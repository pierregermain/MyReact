import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

function App() {

  const ficha = {
    altura: 172,
    grupo: 'B',
    estado: 'OK',
    alergias: false,
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hello World!</h1>
        {/* Carga de mi primer componente */}
        <div className='mis-componentes'>
          <MiComponente />
          <hr></hr>
          <TercerComponente 
            nombre="Pierre" 
            libro="Harry"
            ficha={ficha}
            />
          <hr></hr>
          <SegundoComponente />
        </div>
      </header>
    </div>
  );
}

export default App;
