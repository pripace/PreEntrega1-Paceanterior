export const consultaValor = async () => {
            
    const response = await fetch("./json/products.json")
    const productos = await response.json()
    const cardProducto = productos.map(producto =>
        <div className="card cardProducto" key={producto.id} style={{ width: '18rem' }}>
            <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: ${producto.precio}</p>
                <p className='card-text'>Quedan: {producto.stock}</p>
                <button className='btn btn-outline-secondary'>Ver Item</button>
            </div>
        </div>
    )
    return cardProducto
}

