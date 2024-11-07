import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => (
  <div className="passwordForget">
    <div id="backBtn">
      <Link to={ROUTES.HOME} style={{ color: 'black' }}>
        <FontAwesomeIcon icon={faCaretLeft} size="2x" />
      </Link>
    </div>
    <div className="mobileHeader">
      <h3>REINICIAR PW</h3>
    </div>
    <div className="dashboardHeader">
      <h1>REINICIAR CONTRASEÑA</h1>
    </div>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;
    const isInvalid = email === '';
    return (
      <div>
        <div>
          Escribe tu correo electrónico registrado para obtener una nueva contraseña
        </div>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          placeholder="Dirección de Correo Electrónico"
        />
        <div 
          onClick={isInvalid ? null : (e) => this.onSubmit(e)}
          className={isInvalid ? "btn btn_disabled" : "btn"}
          >
          REINICIAR CONTRASEÑA
        </div>
        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

const PasswordForgetLink = () => (
  <div>
    <Link to={ROUTES.PASSWORD_FORGET} style={{ color: 'black' }}>¿Olvidaste tu contraseña?</Link>
  </div>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
