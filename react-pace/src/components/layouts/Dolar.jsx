import React, { useState, useEffect } from 'react';

const Dolar = () => {

    const [dolar, setDolar] = useState([]);

    useEffect(() => {
        const cotizacion = () => {
            fetch("https://criptoya.com/api/dolar")
                .then(response => response.json())
                .then(({ oficial, solidario, blue }) => {
                    setDolar(Object.entries({ oficial, solidario, blue }).map((moneda, indice) => <p key={indice}>Tipo de cambio USD: {moneda[0]}, ${moneda[1]}.</p>))  //uso map para mostrar en mi codigo estos valores, trans en etiqueta p
                })
            console.log(dolar)
        }

        cotizacion()

        setInterval(() => {
            cotizacion()
        }, 60000)
    }, []);


    return (
        <>
            {dolar}
        </>
    );
}

export default Dolar;

/*     const productos = [     PROBANDO PROMESAS 
        {id:1, nombre: "Mat", precio: 1000, stock: 5},
        {id:2, nombre: "cubo", precio: 500, stock: 8},
    ]

    const consultaHab = (hay) => {
        return new Promise((resolve, reject) => {
            if(hay){
                resolve(productos)
            } else {
                reject("No hay en stock")
            }
        })
    }

    consultaHab(true).then(data => console.log(data)) */