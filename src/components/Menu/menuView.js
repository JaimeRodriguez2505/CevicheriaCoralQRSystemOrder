import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import './style.css';
import Modal from '../Modals';
import { ClientMenuItemCard } from '../Cards';
import MenuDemoModal from '../Modals/MenuDemoModal';
import OrderConfirmScreen from './orderConfirmScreen';

const MenuView = ({
  error,
  order,
  drinks,
  dishes,
  addItem,
  showModal,
  sendOrder,
  orderSent,
  deleteItem,
  getItemQty,
  currentItem,
  toggleModal,
  getItemCost,
  dataFetched,
  orderIsEmpty,
  businessName,
  confirmScreen,
  drinksIsEmpty,
  dishesIsEmpty,
  setCurrentItem,
  upgradeItemQty,
  handleFormInput,
  itemExistsInOrder,
  orderDishesIsEmpty,
  orderDrinksIsEmpty,
  toggleConfirmScreen,
}) => (
  <div className="menuView" id={orderSent && "noMargin"}>
    <div className="dashboardHeader">
      <h1>MENÚ</h1>
      <h3>{businessName}</h3>
    </div>

    {!orderSent && (
      <div className="menuHeader" id={confirmScreen && "menuHeaderConfirm"}>
        <h3>{confirmScreen ? "TU PEDIDO" : "MENÚ"}</h3>
        {!confirmScreen && <h3>{businessName}</h3>}
      </div>
    )}

    <div className="menuContainer">
      {/* Pantalla de Obtención de Datos */}
      {!dataFetched && 
        <div id="fetchingData">
          <h3>OBTENIENDO DATOS...</h3>
        </div>
      }
      {/* Fin de Pantalla de Obtención de Datos */}
      {/* Pantalla Principal */}
      {(!orderSent && !confirmScreen) && (
        <div className="client_menuItems">
          <div>
            {!drinksIsEmpty && ( 
              <>
              <h4>BEBIDAS</h4> 
              {drinks && drinks.map((item, idx) =>
                <ClientMenuItemCard 
                  key={idx}
                  idx={idx}
                  item={item}
                  type="drinks"
                  addItem={addItem}
                  getItemQty={getItemQty}
                  deleteItem={deleteItem}
                  currentItem={currentItem}
                  setCurrentItem={setCurrentItem}
                  upgradeItemQty={upgradeItemQty}
                  isInOrder={itemExistsInOrder(item.name, "drinks")}
                  isCurrentItem={(currentItem.type === 'drinks' && currentItem.idx === idx)}
                />
              )}
              </>
            )}
          </div>
          <div>
            {!dishesIsEmpty && (           
              <>
              <h4>PLATOS</h4>
              {dishes && dishes.map((item, idx) =>    
                <ClientMenuItemCard 
                  key={idx}
                  idx={idx}
                  item={item}
                  type="dishes"
                  addItem={addItem}
                  deleteItem={deleteItem}
                  getItemQty={getItemQty}
                  currentItem={currentItem}
                  setCurrentItem={setCurrentItem}
                  upgradeItemQty={upgradeItemQty}
                  isInOrder={itemExistsInOrder(item.name, "dishes")}
                  isCurrentItem={(currentItem.type === 'dishes' && currentItem.idx === idx)}
                />   
              )}
              </>
            )}
          </div>
        </div>
      )}
      {/* Fin de Pantalla Principal */}
      {/* Pantalla de Éxito del Pedido */}
      {orderSent && (
        <div className="orderSent">
          <div>
            <h3>¡ÉXITO!</h3>
            <h4>TU PEDIDO HA SIDO ENVIADO</h4>
          </div>
          <div>
            <h4>TOTAL: ${order.cost}</h4>
          </div>
        </div>
      )}
      {/* Fin de Pantalla de Éxito del Pedido */}
      {/* Pantalla de Error */}
      {error && 
        <div id="menuView_error">
          <FontAwesomeIcon icon={faExclamationTriangle} size="4x"/>
          <h3>{error}</h3>
          <h3>POR FAVOR, INTENTA DE NUEVO</h3>
        </div>
      }
      {/* Fin de Pantalla de Error */}
      {/* Pantalla de Confirmación */}
      {(confirmScreen && !orderSent) && (
        <OrderConfirmScreen 
          order={order}
          getItemCost={getItemCost}
          handleFormInput={handleFormInput}
          toggleConfirmScreen={toggleConfirmScreen}
          orderDrinksIsEmpty={orderDrinksIsEmpty}
          orderDishesIsEmpty={orderDishesIsEmpty}
        />
      )}
      {/* Fin de Pantalla de Confirmación */}
      {!orderSent && (
        <div className="bottomNav" id={confirmScreen && "bottomNavConfirm"}>
          <div>
            <h4>TOTAL:</h4>
            <h4>${order.cost}</h4>
          </div>
          <div 
            onClick={confirmScreen ? () => sendOrder() : () => toggleConfirmScreen()}
            className={orderIsEmpty ? "btn btn_disabled" : "btn"}
          >
            {confirmScreen ? "CONFIRMAR" : "PEDIR"}
          </div>
        </div>
      )}
    </div>
    {/* Modal de Demostración */}
    <Modal show={showModal}>
      <MenuDemoModal toggleModal={toggleModal} />
    </Modal>
    {/* Fin de Modal de Demostración */}
  </div>
);

export default MenuView;
