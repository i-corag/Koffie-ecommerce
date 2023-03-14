import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
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
