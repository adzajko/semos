import styled from 'styled-components';

const ItemArticle = styled.article``;

const Item = ({ item, petko }) => {
  const handleDelete = () => {
    petko(item);
  };
  return (
    <ItemArticle>
      <h5>{item?.planetName}</h5>
      <p>{item?.yearOfDiscovery}</p>
      <button onClick={handleDelete}>Delete</button>
    </ItemArticle>
  );
};

export default Item;
