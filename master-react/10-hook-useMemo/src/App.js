import './App.css';
import 'react-tabs/style/react-tabs.css';
import { Gestion } from './components/Gestion';
import { Tareas } from './components/Tareas';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs>
          <TabList>
            <Tab>Tareas</Tab>
            <Tab>Gestion</Tab>
          </TabList>
          <TabPanel>
            {/* Ejemplo de hook useMemo */}
            <Tareas></Tareas>
          </TabPanel>
          <TabPanel>
            {/* Ejemplo de función React.memo*/}
            <Gestion></Gestion>
          </TabPanel>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
