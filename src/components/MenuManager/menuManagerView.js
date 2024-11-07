import React from 'react';

import './style.css';
import { MenuItemCard } from '../Cards';
import MenuSideboard from './menuSideboard';

const MenuManagerView = ({
  menu,
  addItem,
  editItem,
  itemEdit,
  inputItem,
  cancelEdit,
  deleteItem,
  onChangeForm,
  addIsInvalid,
  saveEditItem,
  onChangeEdit,
  dishesIsEmpty,
  drinksIsEmpty,
  isInvalidEdit,
}) => {
  return (
    <div className="viewSmall">
      <div className="dashboardHeader">
        <h1>MENÚ</h1>
      </div>
      <div className="menuItemCardsView">
        <div>
          {!drinksIsEmpty && <h3>BEBIDAS</h3>}
          <div className="menuItemCards_items">
            {drinksIsEmpty ? 
              <h3>BEBIDAS NO REGISTRADAS</h3>
            :
              <>
                {menu.drinks && menu.drinks.map((el, idx) => 
                  <MenuItemCard 
                    el={el}
                    key={idx}
                    idx={idx}
                    editItem={editItem}
                    editItemType={"drinks"}
                    cancelEdit={cancelEdit}
                    isSelected={(itemEdit.type === "drinks" && itemEdit.idx === idx) ? true : false}
                  />
                )}
              </>
            }
          </div>
        </div>
        <div>
          {!dishesIsEmpty && <h3>PLATOS</h3>}
          <div className="menuItemCards_items">  
            {dishesIsEmpty ?
              <h3>PLATOS NO REGISTRADOS</h3>
            :
              <>
                {menu.dishes && menu.dishes.map((el, idx) => 
                  <MenuItemCard 
                    el={el}
                    key={idx}
                    idx={idx}
                    editItem={editItem}
                    editItemType={"dishes"}
                    isSelected={(itemEdit.type === "dishes" && itemEdit.idx === idx) ? true : false}
                  /> 
                )}
              </>
            }
          </div>
        </div>
      </div>
      <div className="fixedSideboard">
        <MenuSideboard 
          addItem={addItem}
          itemEdit={itemEdit}
          inputItem={inputItem}
          deleteItem={deleteItem}
          cancelEdit={cancelEdit}
          onChangeEdit={onChangeEdit}
          onChangeForm={onChangeForm}
          addIsInvalid={addIsInvalid}
          saveEditItem={saveEditItem}
          isInvalidEdit={isInvalidEdit}
        />
      </div>
    </div>
  )
};

export default MenuManagerView;
