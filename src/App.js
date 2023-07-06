import './App.css';
import ItemCount from './components/ItemCount.jsx';

function App() {

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`)
  }
  return (
    <div className="App">
      <header className='suplementos_header'>
        
      </header>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div>
  );
}

export default App;
