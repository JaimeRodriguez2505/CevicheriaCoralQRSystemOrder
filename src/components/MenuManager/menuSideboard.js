import React from 'react';

const MenuSideboard = ({ 
  addItem,
  itemEdit,
  inputItem,
  cancelEdit,
  deleteItem,
  onChangeForm,
  addIsInvalid,
  onChangeEdit,
  saveEditItem,
  isInvalidEdit,
}) => {
  return (
    <div className="menuSideboard">
      {(itemEdit.name === '' && itemEdit.idx === '') && (
        <>
          <div className="menuSideboard_view">
            <h3>AGREGAR NUEVO ÍTEM</h3>
            <div className="menuSideboard_addItemForm">
              <div className="inputGroup">
                <h4>Nombre</h4>
                <input 
                  name="name"
                  type="text"
                  value={inputItem.name}
                  onChange={onChangeForm}
                />
              </div>
              <div className="inputGroup">
                <h4>Costo</h4>
                <div>
                  <h4>$</h4>
                  <input 
                    name="price"
                    type="number"
                    value={inputItem.price}
                    onChange={onChangeForm}
                  />
                </div>
              </div>
              <div className="inputGroup">
                <h4>Descripción</h4>
                <textarea 
                  rows="3" 
                  cols="50" 
                  form="usrform"  
                  name="description"
                  onChange={onChangeForm}
                  value={inputItem.description}
                />
              </div>
              <div className="inputGroup">
                <h4>Tipo</h4>
                <div>
                  <div>Bebida</div>
                  <input 
                    name="type" 
                    type="radio" 
                    value="drinks" 
                    onChange={onChangeForm}
                    checked={inputItem.type === "drinks"} 
                    />
                </div>
                <div>
                  <div>Plato</div>
                  <input 
                    name="type" 
                    type="radio" 
                    value="dishes" 
                    onChange={onChangeForm}
                    checked={inputItem.type === "dishes"}
                    />
                </div>
              </div>
            </div>
          </div>
          <div className="menuSideboard_actionButtons">
            <div 
              onClick={addIsInvalid ? null : addItem}
              className={addIsInvalid ? "btn btn_disabled" : "btn"}
              >
                AGREGAR ÍTEM
              </div>
          </div>
        </>
      )}
      {itemEdit.idx !== '' && (
        <>
          <div className="menuSideboard_view">
            <h3>EDITANDO ÍTEM</h3>
            <div className="menuSideboard_editItemForm">
              <div className="inputGroup">
                <h4>Nombre</h4>
                <input 
                  type="text"
                  name="name"
                  value={itemEdit.name}
                  onChange={onChangeEdit}
                  />
              </div>
              <div className="inputGroup">
                <h4>Costo</h4>
                <div>
                  <h4>$</h4>
                  <input 
                    name="price"
                    type="number"
                    value={itemEdit.price}
                    onChange={onChangeEdit}
                  />
                </div>
              </div>
              <div className="inputGroup">
                <h4>Descripción</h4>
                <textarea 
                  rows="3" 
                  cols="50" 
                  form="usrform"  
                  name="description"
                  onChange={onChangeEdit}
                  value={itemEdit.description}
                />
              </div>
              <div className="inputGroup">
                <h4>Disponible</h4>
                <div>
                  <div>Sí</div>
                  <input 
                    type="radio" 
                    value={true} 
                    name="available" 
                    onChange={onChangeEdit}
                    checked={itemEdit.available} 
                    />
                </div>
                <div>
                  <div>No</div>
                  <input 
                    type="radio" 
                    value={false} 
                    name="available" 
                    onChange={onChangeEdit}
                    checked={!itemEdit.available}
                    />
                </div>
              </div>
            </div>
          </div>
          <div className="menuSideboard_actionButtons">
            <div 
              onClick={isInvalidEdit ? null : (e) => saveEditItem(e, itemEdit.idx)}
              className={isInvalidEdit ? "btn btn_disabled" : "btn"}
            >
              GUARDAR
            </div>
            <div
              onClick={() => deleteItem(itemEdit.idx, itemEdit.type)}
              className="btn btn_secondary"
            >
              ELIMINAR
            </div>
            <div
              onClick={cancelEdit}
              className="btn btn_secondary"
            >
              CANCELAR
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default MenuSideboard;
