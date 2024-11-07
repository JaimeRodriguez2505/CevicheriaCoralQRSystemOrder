import React from 'react';

const OrdersSideboard = ({ 
  getDate, 
  resetOrder,
  orderReady,
  viewCurrent, 
  deleteOrder,
  getOrderTime,
  itemsAreValid, 
  selectedOrder, 
}) => {
  return (
    <div className="ordersSideboard">  
      <div className="ordersSideboard_view">
        <div className="ordersSideboard_view_header">
          <div className="order_title">
            {selectedOrder.orderNum !== undefined && <h3>PEDIDO #{selectedOrder.orderNum}</h3>}
            <h3>{selectedOrder.table === "takeout" ? `PARA LLEVAR` : `MESA ${selectedOrder.table}`}</h3>
          </div>
          <div className="order_info">
            <h3>Inicio</h3>
            <h3 id="time">{getDate(selectedOrder.start).completeDate}</h3>
          </div>
          {selectedOrder.end && (
            <>
              <div className="order_info">
                <h3>Fin</h3>
                <h3 id="time">{getDate(selectedOrder.end).time}</h3>
              </div>
              <div className="order_info">
                <h3>Duración</h3>
                <h3 id="time">{getOrderTime(selectedOrder.start, selectedOrder.end)}</h3>
              </div>
            </>
          )}
          {selectedOrder.comments !== '' && (
            <div className="order_info">
              <h3>Comentarios</h3>
              <h3 id="time">{selectedOrder.comments}</h3>
            </div>
          )}
        </div>
        <div className="ordersSideboard_view_items">
          {itemsAreValid(selectedOrder.dishes) && (
            <div className="order_items">
              <h3>Platos</h3>
              {selectedOrder.dishes.map((item, index) => (
                <div className="item_dish" key={index}>
                  <h4>- {item.name}</h4>
                  <h4>x{item.qty}</h4>
                </div>
              ))}
            </div>
          )}
          {itemsAreValid(selectedOrder.drinks) && (
            <div className="order_items">
              <h3>Bebidas</h3>
              {selectedOrder.drinks.map((item, index) => (
                <div className="item_dish" key={index}>
                  <h4>- {item.name}</h4>
                  <h4>x{item.qty}</h4>
                </div>
              ))}
            </div>
          )}
        </div>
        <div id="total">
          <h3>Total</h3>
          <h3>${selectedOrder.cost}</h3>
        </div>
      </div>
      <div className="ordersSideboard_actionButtons">
        {viewCurrent ? (
          <>
            <div 
              className="btn"
              onClick={() => orderReady(selectedOrder.index)} 
            >
              PEDIDO COMPLETADO
            </div>
            <div 
              className="btn btn_secondary"
              onClick={() => deleteOrder(selectedOrder.index, 'current')} 
            >
              ELIMINAR
            </div>
          </>
        ):(
          <>
            <div 
              className="btn"
              onClick={() => resetOrder(selectedOrder.index)} 
            >
              REINICIAR
            </div>
            <div 
              className="btn btn_secondary"
              onClick={() => deleteOrder(selectedOrder.index, 'past')} 
            >
              ELIMINAR
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrdersSideboard;
