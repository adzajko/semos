import { useEffect, useReducer } from 'react';
import { ADD_ITEM, DELETE_ITEM, SET_ITEMS } from '../../items/items';
import { addItem, deleteItem, getAllItems } from '../../services/api-service';
import { initalItemState, itemReducer } from '../../items/items';
import styled from 'styled-components';
import Item from '../Item';
import AddItem from '../AddItem';

const ItemsContainer = styled.section`
  display: grid;
  grid-template-columns: 30% 30% 30%;
`;

const ItemList = () => {
  const [state, itemsDispatch] = useReducer(itemReducer, initalItemState);

  const handleAddPlanet = (event) => {
    addItem(event)
      .then((newItem) => {
        itemsDispatch({ type: ADD_ITEM, payload: newItem });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleParentClick = (event) => {
    deleteItem(event._id)
      .then(() => {
        itemsDispatch({ type: DELETE_ITEM, payload: event });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllItems()
      .then((data) => {
        itemsDispatch({ type: SET_ITEMS, payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ItemsContainer>
      <AddItem parentListener={handleAddPlanet} />
      {state?.items?.map((item) => (
        <Item key={item._id} item={item} petko={handleParentClick} />
      ))}
    </ItemsContainer>
  );
};

export default ItemList;
