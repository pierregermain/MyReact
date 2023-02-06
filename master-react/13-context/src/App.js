import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';
import { useEffect, useState} from 'react';

function App() {

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    console.log('useEffect [una vez]');

    let usuario = JSON.parse(localStorage.getItem("usuario"));
    setUsuario(usuario);
  },[]);

  useEffect(() => {
    console.log('useEffect [al cambiar usuario]');

    localStorage.setItem("usuario",JSON.stringify(usuario));
  },[usuario]);

  return (
    <div className="App">
      <header className="App-header">
        <PruebaContext.Provider value={{
          usuario,
          setUsuario
        }}>
          <AppRouter />
        </PruebaContext.Provider>
      </header>
    </div>
  );
}

export default App;
