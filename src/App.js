import './App.css';
import "./AppResponsive.css";
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App absolute-center">
      <div className="app-glass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
