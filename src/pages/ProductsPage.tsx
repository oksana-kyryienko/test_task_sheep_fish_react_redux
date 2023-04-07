import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import * as productsActions from '../store/reducers/ProductSlice';
import { deleteProduct, products } from '../store/reducers/ProductSlice';
import Sorter from '../components/Sorter';
import ProductItem from '../components/ProductItem';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(products);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    dispatch(productsActions.init());
  }, [dispatch]);

  const handleTitleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySearch: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setSearchCategory(e.target.value);
  };

  const getValueByPath = (obj: any, path: string) => {
    const parts = path.split('.');
    let value = obj;
    for (const part of parts) {
      value = value[part];
    }
    return value;
  };

  const compareValues = (a: any, b: any, sortOrder: 'asc' | 'desc') => {
    if (typeof a === 'string' && typeof b === 'string') {
      const lowerCaseValueA = a.toLowerCase();
      const lowerCaseValueB = b.toLowerCase();
      return sortOrder === 'asc'
        ? lowerCaseValueA.localeCompare(lowerCaseValueB)
        : lowerCaseValueB.localeCompare(lowerCaseValueA);
    } else {
      return sortOrder === 'asc' ? a - b : b - a;
    }
  };

  const sortedProducts = [...allProducts].sort((a, b) => {
    const valueA = getValueByPath(a, sortKey) as string | number;
    const valueB = getValueByPath(b, sortKey) as string | number;
    return compareValues(valueA, valueB, sortOrder);
  });

  const filteredProducts = sortedProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.category.toLowerCase().includes(searchCategory.toLowerCase())
  );

 
  if (sortKey) {
    filteredProducts.sort((a, b) => {
      const valueA = a[sortKey] as string | number;
      const valueB = b[sortKey] as string | number;
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        const lowerCaseValueA = valueA.toLowerCase();
        const lowerCaseValueB = valueB.toLowerCase();
        return sortOrder === 'asc'
          ? lowerCaseValueA.localeCompare(lowerCaseValueB)
          : lowerCaseValueB.localeCompare(lowerCaseValueA);
      } else {
        return sortOrder === 'asc'
          ? (valueA as number) - (valueB as number)
          : (valueB as number) - (valueA as number);
      }
    });
  }

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <Sorter
              onSort={() => handleSort('category')}
              sortKey={'category'}
              sortOrder={sortOrder}
              label={'category'}
            >
              <input
                type="text"
                value={searchCategory}
                onChange={handleCategorySearch}
              />
            </Sorter>
            <th>Image</th>
            <Sorter
              onSort={() => handleSort('title')}
              sortKey={'title'}
              sortOrder={sortOrder}
              label={'title'}
            >
              <input
                type="text"
                value={searchTerm}
                onChange={handleTitleSearch}
              />
            </Sorter>
            <Sorter
              onSort={() => handleSort('price')}
              sortKey={'price'}
              sortOrder={sortOrder}
              label={'price'}
            />
            <th>Details</th>
            <Sorter
              onSort={() => handleSort('rating.rate')}
              sortKey={'rate'}
              sortOrder={sortOrder}
              label={'rate'}
            />
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              item={product}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
