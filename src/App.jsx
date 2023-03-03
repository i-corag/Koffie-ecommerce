import ItemListContainer from './components/ItemListContainer/itemListContainer';
import NavBar from './components/NavBar/NavBar';
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer gretting='Greeting' />
    </div>

  );
}

export default App
