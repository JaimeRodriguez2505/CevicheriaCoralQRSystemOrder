import React, { Component } from 'react';

import '../../index.css';
import './style.css';

export default class MenuDemoModal extends Component {
  render() {
    return (
      <div className="demoMenuModal">
        <div>
          <h3>¿LISTO PARA ORDENAR?</h3>
          <h3>Mantén esta pestaña abierta y cambia a la pestaña previamente abierta para obtener una visión general de las funciones. Cuando estés listo, vuelve aquí.</h3>
          <p>
            Los usuarios verán el menú de tu restaurante a través de esta pantalla. Desde aquí, pueden agregar artículos, cambiar cantidades y realizar su pedido.
          </p>
          <p>
            Intenta cambiar el tamaño de la ventana a tamaño móvil o, mejor aún, dirígete al panel de control en la otra pestaña y escanea un código QR desde tu propio celular.
          </p>
        </div>
        <div>
          <div 
            onClick={() => this.props.toggleModal()}
            className="btn"
            >
            ¡ENTENDIDO!
          </div>
        </div>
      </div>
    )
  }
}
