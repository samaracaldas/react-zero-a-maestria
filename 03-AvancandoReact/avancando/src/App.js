import './App.css';

import City from "./assets/city.jpg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetail from './components/UserDetail';

function App() {

  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermelha", newCar: true, km: 0},
    {id: 2, brand: "BMW", color: "Preto", newCar: false, km: 35682},
    {id: 3, brand: "Renault", color: "Prata", newCar: false, km: 50000},
  ]

  const peoples = [
    {id: 1, nome: "Ana", idade: 18, profissao: "advogada"},
    {id: 2, nome: "João", idade: 29, profissao: "cantor"},
    {id: 3, nome: "Clara", idade: 17, profissao: "atleta"},
  ]

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/* Imagem em asset */}
      <div>
        <img src={City} alt="" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* props */}
      <ShowUserName name="Matheus"/>

      {/* destructuring */}
      <CarDetails brand="Renault" km={100000} color="white" newCar={false}/>

      {/* reaproveitamento */}
      <CarDetails brand="Honda" km={200000} color="black" newCar={true}/>
      <CarDetails brand="WMW" km={150000} color="gray" newCar={false}/>

      {/* loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} newCar={car.newCar} km={car.km}/>
        ))
      }

      {/* fragment */}
      <Fragment propFragment="teste"/>

      {/* children */}
      <Container myValue="testing">
        <p>E este é o conteúdo.</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o Container.</h5>
      </Container>

      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

      {/* challenge */}
      {peoples.map((people) => (
        <UserDetail key={people.id} nome={people.nome} idade={people.idade} profissao={people.profissao} />

      ))}

      
    </div>
  );
}

export default App;
