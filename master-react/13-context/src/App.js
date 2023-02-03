import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';
import { useState} from 'react';

function App() {

  const [usuario, setUsuario] = useState({
    username: 'p13',
    name: 'pierre'
  });

  return (
    <div className="App">
      <header className="App-header">
        <PruebaContext.Provider value={{usuario,setUsuario}}>
          <AppRouter />
        </PruebaContext.Provider>
      </header>
    </div>
  );
}

export default App;
