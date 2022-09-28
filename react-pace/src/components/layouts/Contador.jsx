import React, { useState } from 'react';

const Contador = () => {

    const [contador, setContador] = useState(0);

    function modificarContador(operacion) {
        if (operacion == "+") {
            setContador(contador + 1)
        } else {
            if (contador > 0) {
                setContador(contador - 1)
            }
        }
    }

    return (
        <>
            <div className='card border-secondary mb-3' style={{ maxWidth: '20rem' }}>
                <div className="card-body">
                    <button className='btn btn-outline-secondary' onClick={() => modificarContador("+")}> + </button>
                    <p className="card-text">{contador}</p>
                    <button className='btn btn-outline-secondary' onClick={() => modificarContador("-")}> - </button>
                </div>
            </div>
        </>
    );
}

/* export default Contador; */