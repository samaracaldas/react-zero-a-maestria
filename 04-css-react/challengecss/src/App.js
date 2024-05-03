
import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermelha", newCar: true, km: 0},
    {id: 2, brand: "BMW", color: "Preto", newCar: false, km: 35682},
    {id: 3, brand: "Renault", color: "Prata", newCar: false, km: 50000},
  ]
  
  return (
    <div className="App">
      <h1>Cars</h1>
      <div className="car-container">
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} newCar={car.newCar} km={car.km}/>
          ))
        }

      </div>
    </div>
  );
}

export default App;
