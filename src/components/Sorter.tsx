import React from 'react';

interface Props {
  children?: React.ReactNode;
  onSort: (key: string) => void;
  sortKey: string;
  sortOrder: 'asc' | 'desc';
  label: string;
}

const Sorter: React.FC<Props> = ({
  onSort,
  sortKey,
  sortOrder,
  label,
  children,
}) => {
  const handleClick = () => {
    if (sortKey === label) {
      onSort(sortKey);
    } else {
      onSort(label);
    }
  };

  return (
    <th onClick={handleClick}>
      {label}
      {sortKey === label && sortOrder === 'asc' && '▲'}
      {sortKey === label && sortOrder === 'desc' && '▼'}
      {children}
    </th>
  );
};

export default Sorter;
