import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Counter from './components/ItemCount';

function App() {

  const greetings = "Texto de prueba"

  const items = ["texto1", "texto2", "texto3" , "Texto4"]

  const stock = 0

  return (
    <div className="App">
    
    <Navbar />

    <div className='container'>
    <ItemListContainer greetings={greetings} items={items} stock={stock} />
    
    </div>
    </div>
  );
}

export default App;
