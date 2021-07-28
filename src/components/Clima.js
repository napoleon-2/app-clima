import React from 'react';

const Formulario = ({resultado}) => {
    //extraer los valores
    const {name, main} = resultado;
    
    if(!name) return null;

    //grados kelvin
    const kelvin  = 273.15;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                    <p className="Temperatura">
                        { parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                    </p>
                    <p className="Temperatura Maxima">
                        { parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                    </p>
                    <p className="Temperatura Minima">
                        { parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                    </p>    
            </div>

        </div>
     );
}
 
export default Formulario;