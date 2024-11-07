import React from 'react';

const PasswordChangeView = ({
  error,
  onSubmit,
  onChange,
  isInvalid,
  passwordOne,
  passwordTwo,
}) => (
  <div>
    <h3>ACTUALIZAR CONTRASEÑA</h3>
    <div>
      <input
        type="password"
        name="passwordOne"
        value={passwordOne}
        onChange={onChange}
        placeholder="Nueva Contraseña"
      />
      <input
        type="password"
        name="passwordTwo"
        value={passwordTwo}
        onChange={onChange}
        placeholder="Confirmar Nueva Contraseña"
      />
      <div 
        className={isInvalid ? "btn btn_disabled" : "btn btn_secondary"}
        onClick={isInvalid ? null : (e) => onSubmit(e)}
        >
        REINICIAR
      </div>
    </div>
    {error && <p>{error.message}</p>}
  </div>
);

export default PasswordChangeView;
