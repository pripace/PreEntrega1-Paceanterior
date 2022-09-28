import React, { useState, useEffect } from 'react';
import {consultaValor} from "../cardItem/Card";

const Home = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultaValor().then(producto => setProductos(producto))
    }, []);

    return (
        <div className='row'>
            {productos}
        </div>
    );
}

export default Home;

