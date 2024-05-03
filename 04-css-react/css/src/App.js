import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  const n = 15;
  const [name] = useState("Matheus");

  const redTitle = true;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>

       {/* CSS do Componente */}
      <MyComponent/>
      <p>Este é o parágrafo do App.jsx</p>

      {/* inline CSS */}
      <p style={{color: "magenta", padding: "15px", borderTop: "2px solid magenta"}}>Este elemento foi estilizado de forma inline</p>

      {/* inline CSS dinamico */}
      <h2 style={n < 10 ? { color: "purple"} : { color: "pink"}}>
        CSS dinamico
      </h2>
      <h2 style={n > 10 ? { color: "purple"} : { color: "pink"}}>
        CSS dinamico
      </h2>
      <h2 
        style={
          name === "Matheus"
          ? {color: "orange", backgroundColor: "magenta"}
          : null
        }
      >
        teste
      </h2>

      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título terá classe dinamica
      </h2>

      {/* CSS modules */}
      <Title/ >
      <h2 className="my_title">Testando</h2>
     

    </div>
  );
}

export default App;
