
import './App.css';


// components
import Header from './components/homepage/Header';
import TodoForm from './components/homepage/TodoForm';
import Todos from './components/homepage/Todos';

function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;