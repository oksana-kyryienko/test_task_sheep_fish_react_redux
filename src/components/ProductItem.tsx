import React, { useState } from 'react';
import { IProduct } from '../types/Product';

type Props = {
  item: IProduct;
  onDelete: (id: number) => void;
};

const ProductItem: React.FC<Props> = ({ item, onDelete  }) => {
  const { title, price, description, category, image, rating, id } = item;

  const [details, setDetails] = useState(false);
  const btnStyle = {
    border: '1px solid black',
    background: details ? 'yellowgreen' : 'lightblue',
  };
  return (
    <tr>
      <td className="category">{category}</td>
      <td>
        <img src={image} alt={title} className="image" />
      </td>
      <td className="title">{title}</td>
      <td>{price} $</td>
      <td>
        <button
          className="btn"
          style={btnStyle}
          onClick={() => setDetails((prev) => !prev)}
        >
          {details ? 'Hide details' : 'Show Details'}
        </button>
        {details && <p className="description">{description}</p>}
      </td>
      <td>
        <span style={{ fontWeight: 'bold' }}>{rating?.rate}</span>
      </td>
      <td>
        <button onClick={() => onDelete(id)}>Удалить</button>
      </td>
    </tr>
  );
};

export default ProductItem;
