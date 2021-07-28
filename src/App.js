import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {
  //state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  })
  
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);
  
  const {ciudad, pais} = busqueda;

  useEffect(() => {
    const consultartAPI = async () => {
      if(consultar){
        const appId = 'c11a5e2033f0f29d1b7944c7a5563668'
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
        guardarConsultar(false)
      }
      //detecta si hubo resultados correctos en la consulta

      
      if(resultado.cod === "404"){
            guardarError(true);
          }else{
            guardarError(false);
          }
    }
  
    consultartAPI();
  }, [consultar])
  
  let componente;
  if (error){
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima 
                  resultado={resultado}
                  />
  }

  return (
    <Fragment>
      <Header 
        titulo='Clima App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
                <Formulario 
                  busqueda={busqueda}
                  guardarBusqueda={guardarBusqueda}
                  guardarConsultar={guardarConsultar}
                /> 
            </div>
            <div className="col m6 s12">
                <Clima 
                  resultado={resultado}
                />
            </div>
          </div>

        </div>

      </div>
    </Fragment>
  );
}

export default App;
