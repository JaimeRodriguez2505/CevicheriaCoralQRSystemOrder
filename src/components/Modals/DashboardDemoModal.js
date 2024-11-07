import React, { Component } from 'react';
import '../../index.css';

export default class DashboardDemoModal extends Component {
  render() {
    return (
      <div className="demoModal_wide">
        <div className="demoModal_content">
          <div></div>

          <div className="demoModal_header">
            <h3>¡BIENVENIDO A DASH TABS!</h3>
            <h3>El panel de control es el núcleo de la funcionalidad de Dash Tabs y está dividido en tres secciones</h3>
          </div>
          <div>
            <div className="demoModal_infoColumn">
              <h4>ÓRDENES</h4>
              <div>
                <div>
                  Ver órdenes en tiempo real.
                </div>
                <div>
                  Navegar a través de órdenes pasadas.
                </div>
                <div>
                  Revisar información de la orden incluyendo artículos, costo total y la hora en que se realizó la orden.
                </div>
              </div>
            </div>
            <div className="demoModal_infoColumn">
              <h4>MESAS</h4>
              <div>
                <div>
                  Agregar mesas.
                </div>
                <div>
                  Generar e imprimir códigos QR individuales para cada mesa.
                </div>
              </div>
            </div>
            <div className="demoModal_infoColumn">
              <h4>MENÚ</h4>
              <div>
                <div>
                  Ingresar artículos del menú con precio, descripción y disponibilidad.
                </div>
                <div>
                  Los cambios en el menú se reflejarán en la página del menú del negocio.
                </div>
              </div>
            </div>
          </div>
          <h3>Intenta realizar una orden a través del menú que se abrió en otra pestaña. Luego verifica la orden en el panel de control.</h3>
        </div>
        <div>
          <div
            onClick={() => this.props.toggleModal()}
            className="btn"
            >
            ¡DÉJAME PROBAR!
          </div>
        </div>
      </div>
    )
  }
}
