import logo from './logo.svg';
import './App.css';
import Shoes from './components/Shoes/Shoes';
import Employees from './components/Employees/Employees';

function App() {
  return (
    <div className="App">
      <Shoes></Shoes>
      <h2>Loading Fake data</h2>
      <Employees></Employees>
    </div>
  );
}

export default App;
