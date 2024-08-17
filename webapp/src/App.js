import './App.css';
import Layout from './components/layout/Layout'
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
