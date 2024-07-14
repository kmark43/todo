import './App.css';
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Todo from './components/todo/Todo'

function App() {
  return (
    <div className="App">
      <Layout>
        <Todo />
      </Layout>
    </div>
  );
}

export default App;
