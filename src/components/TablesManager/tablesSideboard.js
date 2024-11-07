import React from 'react';

const TablesSideboard = ({
  addTable,
  tableEdit,
  inputTable,
  deleteTable,
  toggleModal,
  setTableEdit,
  sideboardView,
  setInputTable,
  saveEditTable,
  editIsInvalid,
  inputIsInvalid,
  cancelAddTable,
  cancelTableEdit,
  toggleAddTableForm,
}) => {
  return (
    <div className="tablesSideboard">
      {/* Menú */}
      {sideboardView === "menu" && (
        <div className="tablesSideboard_view main">
          <div 
            className="btn"
            onClick={() => toggleAddTableForm("open")}
            >
            AGREGAR MESA
          </div>
          <div>
            <div 
              onClick={() => toggleModal("tables")} 
              className="btn btn_secondary"
            >
              OBTENER CÓDIGOS QR DE MESAS
            </div>
            <div 
              className="btn btn_secondary"
              onClick={() => toggleModal("takeout")}
            >
              OBTENER CÓDIGO QR PARA LLEVAR
            </div>
          </div>
        </div>
      )}
      {/* Formulario para Agregar Mesa */}
      {sideboardView === "addTable" && (
        <>
          <div className="tablesSideboard_view">
            <h3>AGREGAR NUEVA MESA</h3>
            <div className="inputGroup">
              <h4>Número de Mesa</h4>
              <input 
                type="number"
                value={inputTable.number}
                onChange={(e) => setInputTable("number", e.target.value)}
              />
            </div>
            <div className="inputGroup">
              <h4>Descripción</h4>
              <textarea 
                rows="3"
                cols="50"
                form="usrform"
                value={inputTable.description}
                onChange={(e) => setInputTable("description", e.target.value)}
              />
            </div>
          </div>
          <div className="menuSideboard_actionButtons">
            <div 
              onClick={inputIsInvalid ? null : (e) => addTable(e)}
              className={inputIsInvalid ? "btn btn_disabled" : "btn"}
            >
              AGREGAR
            </div>
            <div 
              className="btn btn_secondary"
              onClick={() => cancelAddTable()}
            >
              CANCELAR
            </div>
          </div>
        </>
      )}
      {/* Formulario para Editar Mesa */}
      {sideboardView === "editTable" && (
        <>
          <div className="tablesSideboard_view">
            <h3>EDITANDO MESA</h3>
            <div className="inputGroup">
              <h4>Número de Mesa</h4>
              <input 
                type="number"
                value={tableEdit.newNumber}
                onChange={(e) => setTableEdit("newNumber", e.target.value)}
              />
            </div>
            <div className="inputGroup">
              <h4>Descripción</h4>
              <textarea 
                rows="3"
                cols="50"
                form="usrform"
                value={tableEdit.newDescription}
                onChange={(e) => setTableEdit("newDescription", e.target.value)}
              />
            </div>
            <div 
              className={editIsInvalid ? "btn btn_disabled" : "btn btn_secondary" }
              id="showQr"
              onClick={editIsInvalid ? null : () => toggleModal(tableEdit.newNumber)}
            >
              MOSTRAR QR
            </div>
          </div>
          <div className="menuSideboard_actionButtons">
              <div 
                className={editIsInvalid ? "btn btn_disabled" : "btn"}
                onClick={editIsInvalid ? null : (e) => saveEditTable(e)}
              >
                GUARDAR
              </div>
              <div 
                className="btn btn_secondary"
                onClick={() => deleteTable(tableEdit.current)}
              >
                ELIMINAR
              </div>
              <div 
                className="btn btn_secondary"
                onClick={() => cancelTableEdit()}
              >
                CANCELAR
              </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TablesSideboard;
