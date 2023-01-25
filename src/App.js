import Graph from './components/graph';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800 ">     
             
      <h1 className="text-5xl py-8 mb-10 bg-pink-100 text-pink-500 rounded"><strong>Expense Tracker</strong></h1>
      {/*grid columns*/}
      <div className="grid md:frid-cols-2 gap-4">
        {/*Chart*/}
        <Graph></Graph> 
        {/*form*/}

      </div>
      </div>
    </div>
  );
}

export default App;
