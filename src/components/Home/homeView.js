import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStream,
  faQrcode,
  faReceipt, 
  faChartBar,
  faHamburger,
  faMobileAlt, 
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';

import './style.css';

const HomeView = ({ launchDemo, signUpRoute, signInRoute }) => (
  <div className="homeView">
    <div className="mobileHomeHeader">
      <div className="btn">
        <Link style={{ textDecoration: 'none', color: 'white' }} to={signInRoute}>INICIAR SESIÓN</Link>
      </div>
    </div>
    <div className="introRow">
      <div>
        <FontAwesomeIcon icon={faReceipt} size="9x"/>
      </div>
      <div>
        <h1>BIENVENIDO A DASHTABS.</h1>
        <p>Gestión de pedidos optimizada para la industria de alimentos.</p>
        <div className="btn" onClick={() => launchDemo()}>¡PRUÉBALO AHORA!</div>
      </div>
    </div>
    <div className="firstRow">
      <div>
        <div id="rowText">
          <p>
            Genera tus propios códigos QR.
          </p>
          <p>
            Los usuarios escanean el código y obtienen una versión interactiva de tu menú.
          </p>
          <p>
            Ingresan sus artículos directamente y envían el pedido a través de la interfaz interactiva.
          </p>
        </div>
      </div>
      <div>
        <span className="qrIcons">
          <FontAwesomeIcon icon={faMobileAlt} size="10x" />
          <FontAwesomeIcon icon={faQrcode} size="4x" id="qrIcon" />
        </span>
      </div>
    </div>
    <div className="secondRow">
      <div>
        <FontAwesomeIcon icon={faStream} size="8x" />
      </div>
      <div>
        <div id="rowText">
          <p>
            Mantén el seguimiento de los pedidos en tiempo real.
          </p>
          <p>
            Navega a través de pedidos anteriores.
          </p>
          <p>
            Consulta información esencial del pedido, artículos, costo total y la hora en que se realizó el pedido.
          </p>
        </div>
      </div>
    </div>
    <div className="benefitsRow">
      <div>
        <FontAwesomeIcon icon={faUserFriends} size="5x"/>
        <p>
          Sin menús físicos y menos personal de espera.
        </p>
      </div>
      <div>
        <FontAwesomeIcon icon={faChartBar} size="5x" />
        <p>
          Rastrea el tiempo de finalización de cada pedido.
        </p>
      </div>
      <div>
        <FontAwesomeIcon icon={faHamburger} size="5x" />
        <p>
          ¿Cambios en el menú? Actualiza en tiempo real.
        </p>
      </div>
    </div>
    <div className="lastRow">
      <div className="btn" onClick={() => launchDemo()}>¡PRUÉBALO AHORA!</div>
      <p>o</p>
      <div className="btn">
        <Link 
          style={{ textDecoration: 'none', color: 'white' }}
          to={signUpRoute}
        >
            CREAR CUENTA
          </Link>
      </div>
    </div>
    <div className="footer">
      <div style={{
          opacity: 0.3,
          fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <a 
          style={{ 'textDecoration': 'none', 'color': "gray" }} 
          href="http://www.github.com/pgast" 
        >
          &lt;/&gt; pgast
        </a>
      </div>
    </div>
  </div>
);

export default HomeView;
