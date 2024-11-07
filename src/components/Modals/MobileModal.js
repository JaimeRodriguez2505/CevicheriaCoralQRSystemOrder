import React from 'react';
import { withRouter } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const MobileModal = (props) => (
  <div className="demoModal_wide">
    <div className="demoModal_content">
      <div id="mobileModal">
        <p>
          El panel de control actualmente no está optimizado para uso móvil.
        </p>
        <p>
          Por favor, cambia a una computadora de escritorio para obtener la mejor experiencia.
        </p>
      </div>
    </div>
    <div>
      <div
        onClick={() => props.history.push(ROUTES.HOME)}
        className="btn"
        >
        VOLVER
      </div>
    </div>
  </div>
)

export default withRouter(MobileModal);
