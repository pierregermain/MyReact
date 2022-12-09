import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { MiAno } from './components/MiAno';

function App() {

  const fecha = new Date();
  const anoNow = fecha.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hook useState</h1>
        <MiPrimerEstado />
        <MiAno ano={anoNow} />
      </header>
    </div>
  );
}

export default App;
