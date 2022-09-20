import React from "react";

const CartWidget = () => {
    return (
        <>
            <div className="prod">
                <div className="card border-secondary mb-3" style={{ maxWidth: '20rem' }}>
                    <div className="card-header">La tiendita</div>
                    <div className="card-body">
                        <h4 className="card-title">Mat Ultra Resistente</h4>
                        <p className="card-text">Colchoneta para Yoga de TPE, 6mm, ecológico y duradero. No desgrana.</p>
                    </div>
                </div>
                <div className="card border-secondary mb-3" style={{ maxWidth: '20rem' }}>
                    <div className="card-header">La tiendita</div>
                    <div className="card-body">
                        <h4 className="card-title">Ladrillo Yoga Pilates</h4>
                        <p className="card-text">Ladrillo de goma eva, tamaño clásico. Viene x 2 unidades para complementar las posturas.</p>
                    </div>
                </div>
                <div className="card border-secondary mb-3" style={{ maxWidth: '20rem' }}>
                    <div className="card-header">La tiendita</div>
                    <div className="card-body">
                        <h4 className="card-title">Zafu De Meditación</h4>
                        <p className="card-text">Zafu de meditación 16 X 32 Cm. Doble funda. Relleno de cáscara de trigo</p>
                    </div>
                </div>
                <div className="card border-secondary mb-3" style={{ maxWidth: '20rem' }}>
                    <div className="card-header">La tiendita</div>
                    <div className="card-body">
                        <h4 className="card-title">Kit Manta y Almohadilla</h4>
                        <p className="card-text">Kit para relajación. Manta de lona estampada y Almohadilla rellena de semillas. Viene con bolsita.</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CartWidget;