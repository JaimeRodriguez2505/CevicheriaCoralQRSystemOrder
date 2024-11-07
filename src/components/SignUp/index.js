import React, { Component, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

import './style.css';
import Modal from '../Modals';
import { withFirebase } from '../Firebase';
import MobileModal from '../Modals/MobileModal';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    
  }, []);

  return (
    <div className="signupView">
      <div id="backBtn">
        <Link to={ROUTES.HOME} style={{ color: 'black' }}>
          <FontAwesomeIcon icon={faCaretLeft} size="2x" />
        </Link>
      </div>
      <div className="mobileHeader">
        <h3>REGISTRARSE</h3>
      </div>

      <div className="dashboardHeader">
        <h1>REGISTRARSE</h1>
      </div>
      <SignUpForm />
      <Modal show={showModal}>
        <MobileModal />
      </Modal>
    </div>
  );
};

const INITIAL_STATE = {
  email: '',
  error: null,
  username: '',
  passwordOne: '',
  passwordTwo: '',
  businessName: '',
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne, businessName } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        this.props.firebase
          .user(authUser.user.uid)
          .set({ username, email, tables: 0, businessName })
          .then(() => {
            this.props.firebase.userMenu(authUser.user.uid)
              .set({ drinks: 0, dishes: 0 })
              .then(() => {
                this.props.firebase.userOrders(authUser.user.uid)
                  .set({ current: 0, past: 0 });
                this.props.history.push(ROUTES.DASHBOARD);
              });
          });
      })
      .catch((error) => {
        this.setState({ error });
      });

    this.setState({ ...INITIAL_STATE });
    this.props.history.push(ROUTES.HOME);
    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      email,
      error,
      username,
      passwordOne,
      passwordTwo,
      businessName,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      businessName === '' ||
      username === '';

    return (
      <div>
        <div>
          <div>
            <h3>NOMBRE</h3>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.onChange}
            />
          </div>
          <div>
            <h3>CORREO ELECTRÓNICO</h3>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div>
          <div>
            <h3>CONTRASEÑA</h3>
            <input
              type="password"
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
            />
          </div>
          <div>
            <h3>CONFIRMAR CONTRASEÑA</h3>
            <input
              type="password"
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div>
          <div>
            <h3>NOMBRE DEL NEGOCIO</h3>
            <input
              type="text"
              name="businessName"
              value={businessName}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div
          onClick={isInvalid ? null : (e) => this.onSubmit(e)}
          className={isInvalid ? "btn btn_disabled" : "btn"}
        >
          CREAR CUENTA
        </div>

        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

const SignUpLink = () => (
  <div>
    ¿No tienes una cuenta? <Link to={ROUTES.SIGN_UP} style={{ color: 'black' }}>Regístrate</Link>
  </div>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
