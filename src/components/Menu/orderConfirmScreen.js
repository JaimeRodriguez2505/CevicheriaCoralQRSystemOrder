import React from 'react';

import './style.css';

const OrderConfirmScreen = ({
  order, 
  getItemCost,
  handleFormInput,
  orderDrinksIsEmpty,
  orderDishesIsEmpty, 
  toggleConfirmScreen
}) => (
  <div className="orderConfirmScreen">
    {!orderDrinksIsEmpty && (
      <div>
        <h4>Bebidas</h4>
        {order.items.drinks.map((item, idx) => 
          <div key={idx} className="orderItem">
            <div>{item.name}</div>
            <div>
              <div>x {item.qty}</div>
              <div>${getItemCost(item.name, "drinks")} c/u.</div>
            </div>
          </div>
        )}
      </div>
    )}
    {!orderDishesIsEmpty && (
      <div>
        <h4>Platos</h4>
        {order.items.dishes.map((item, idx) => 
          <div key={idx} className="orderItem">
            <div>{item.name}</div>
            <div>
              <div>x {item.qty}</div>
              <div>${getItemCost(item.name, "dishes")} c/u.</div>
            </div>
          </div>
        )}
      </div>
    )}
    <div>          
      <h4>Instrucciones o solicitudes adicionales</h4>
      <textarea rows="4" cols="50" form="usrform" onChange={(e) =>  handleFormInput(e.target.value)}/>
    </div>
    <div className="btn btn_secondary" onClick={() => toggleConfirmScreen()}>CANCELAR</div>
  </div>
);

export default OrderConfirmScreen;
