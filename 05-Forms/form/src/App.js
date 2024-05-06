import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm 
        user={{ 
          name: "Jão", 
          email: "jao@gmail.com",
          bio: "Sou um cantor",
          role: "admin",
        }}/>
    </div>
  );
}

export default App;
