import './App.css';
import { Testimonio } from './components/Testimonio';
import { testi } from './components/objetos';



function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros ex alumnos sobre freeCodeCamp:</h1>
        {testi.map(test => (
          <Testimonio
            imagen={test.imagen}
            name= {test.name}
            country={test.country}
            cargo={test.cargo}
            empresa={test.empresa}
            testimonio={test.testimonio}
          /> 
        ))}
        
      </div>
    </div>
  );
}

export default App;
