import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App absolute-center">
      <div className="app-glass">
        <Sidebar />
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
