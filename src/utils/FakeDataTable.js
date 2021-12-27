import React from 'react';
import MoreActionIcon from '@/icons/moreAction';
import ArrowDownIcon from '@/icons/arrowDown';

export const columns = [
  {
    title: '',
    dataIndex: 'imageUrl',
    key: 'imageUrl',
    render: imageUrl => <div className="image-wrapper">
      <img src={imageUrl} alt='site' width='50px' height='50px' />
    </div>
  },
  {
    title: 'SKU',
    dataIndex: 'sku',
    key: 'sku'
  },
  {
    title: 'Product',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Available',
    dataIndex: 'available',
    key: 'available'
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (_, record) => <div><span>{record.currency}</span><span>{record.price}</span></div>
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    render: () => <div>Need custom allow format!</div>
  },
  {
    title: 'Producer',
    dataIndex: 'producer',
    key: 'producer',
    render: item => item ? item.name : 'No producer'
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'action',
    render: () => <div className='action-row-container'>
      <div className='icon-wrapper'><MoreActionIcon /></div>
      <div className='icon-wrapper'>
        <div className='arrow-border'><ArrowDownIcon /></div>
      </div>
    </div>
  },
];

const data = [
  {
    id: 1,
    name: 'Surf table',
    imageUrl: 'https://resourcefurniture.com/wp-content/uploads/2019/12/Surf-2.jpg',
    sku: 'SP000001',
    barcode: 'PRD000001',
    available: 32,
    stock: 35,
    reversed: 3,
    price: 12,
    cost: 4.56,
    currency: '$',
    category: {
      parent: 'tables',
      children: [
        'dinning',
        'coffee'
      ]
    },
    producer: {
      id: 1,
      name: 'ABC producer'
    },
    vender: {
      id: 1,
      name: 'XYZ vender'
    },
    brand: '',
    collection: '',
    weight: 10,
    calculationUnit: 'kg',
    tags: ['tables', 'table', 'dinning', 'coffee']
  },
  {
    id: 2,
    name: 'Surf table',
    imageUrl: 'https://resourcefurniture.com/wp-content/uploads/2019/12/Surf-2.jpg',
    sku: 'SP000002',
    barcode: 'PRD000002',
    available: 32,
    stock: 35,
    reversed: 3,
    price: 12,
    cost: 4.56,
    currency: '$',
    category: {
      parent: 'tables',
      children: [
        'dinning',
        'coffee'
      ]
    },
    producer: {
      id: 1,
      name: 'ABC producer'
    },
    vender: {
      id: 1,
      name: 'XYZ vender'
    },
    brand: '',
    collection: '',
    weight: 10,
    calculationUnit: 'kg',
    tags: ['tables', 'table', 'dinning', 'coffee']
  },
  {
    id: 3,
    name: 'Surf table',
    imageUrl: 'https://resourcefurniture.com/wp-content/uploads/2019/12/Surf-2.jpg',
    sku: 'SP000003',
    barcode: 'PRD000003',
    available: 32,
    stock: 35,
    reversed: 3,
    price: 12,
    cost: 4.56,
    currency: '$',
    category: {
      parent: 'tables',
      children: [
        'dinning',
        'coffee'
      ]
    },
    producer: {
      id: 1,
      name: 'ABC producer'
    },
    vender: {
      id: 1,
      name: 'XYZ vender'
    },
    brand: '',
    collection: '',
    weight: 10,
    calculationUnit: 'kg',
    tags: ['tables', 'table', 'dinning', 'coffee']
  },
  {
    id: 4,
    name: 'Surf table',
    imageUrl: 'https://resourcefurniture.com/wp-content/uploads/2019/12/Surf-2.jpg',
    sku: 'SP000004',
    barcode: 'PRD000004',
    available: 32,
    stock: 35,
    reversed: 3,
    price: 12,
    cost: 4.56,
    currency: '$',
    category: {
      parent: 'tables',
      children: [
        'dinning',
        'coffee'
      ]
    },
    producer: {
      id: 1,
      name: 'ABC producer'
    },
    vender: {
      id: 1,
      name: 'XYZ vender'
    },
    brand: '',
    collection: '',
    weight: 10,
    calculationUnit: 'kg',
    tags: ['tables', 'table', 'dinning', 'coffee']
  },
  {
    id: 5,
    name: 'Surf table',
    imageUrl: 'https://resourcefurniture.com/wp-content/uploads/2019/12/Surf-2.jpg',
    sku: 'SP000005',
    barcode: 'PRD000005',
    available: 32,
    stock: 35,
    reversed: 3,
    price: 12,
    cost: 4.56,
    currency: '$',
    category: {
      parent: 'tables',
      children: [
        'dinning',
        'coffee'
      ]
    },
    producer: {
      id: 1,
      name: 'ABC producer'
    },
    vender: {
      id: 1,
      name: 'XYZ vender'
    },
    brand: '',
    collection: '',
    weight: 10,
    calculationUnit: 'kg',
    tags: ['tables', 'table', 'dinning', 'coffee']
  },
  {
    id: 6,
    name: 'Surf table',
    imageUrl: 'https://resourcefurniture.com/wp-content/uploads/2019/12/Surf-2.jpg',
    sku: 'SP000006',
    barcode: 'PRD000006',
    available: 32,
    stock: 35,
    reversed: 3,
    price: 12,
    cost: 4.56,
    currency: '$',
    category: {
      parent: 'tables',
      children: [
        'dinning',
        'coffee'
      ]
    },
    producer: {
      id: 1,
      name: 'ABC producer'
    },
    vender: {
      id: 1,
      name: 'XYZ vender'
    },
    brand: '',
    collection: '',
    weight: 10,
    calculationUnit: 'kg',
    tags: ['tables', 'table', 'dinning', 'coffee']
  },
  {
    id: 7,
    name: 'Surf table',
    imageUrl: 'https://resourcefurniture.com/wp-content/uploads/2019/12/Surf-2.jpg',
    sku: 'SP000007',
    barcode: 'PRD000007',
    available: 32,
    stock: 35,
    reversed: 3,
    price: 12,
    cost: 4.56,
    currency: '$',
    category: {
      parent: 'tables',
      children: [
        'dinning',
        'coffee'
      ]
    },
    producer: {
      id: 1,
      name: 'ABC producer'
    },
    vender: {
      id: 1,
      name: 'XYZ vender'
    },
    brand: '',
    collection: '',
    weight: 10,
    calculationUnit: 'kg',
    tags: ['tables', 'table', 'dinning', 'coffee']
  },
  {
    id: 8,
    name: 'Surf table',
    imageUrl: 'https://resourcefurniture.com/wp-content/uploads/2019/12/Surf-2.jpg',
    sku: 'SP000008',
    barcode: 'PRD000008',
    available: 32,
    stock: 35,
    reversed: 3,
    price: 12,
    cost: 4.56,
    currency: '$',
    category: {
      parent: 'tables',
      children: [
        'dinning',
        'coffee'
      ]
    },
    producer: {
      id: 1,
      name: 'ABC producer'
    },
    vender: {
      id: 1,
      name: 'XYZ vender'
    },
    brand: '',
    collection: '',
    weight: 10,
    calculationUnit: 'kg',
    tags: ['tables', 'table', 'dinning', 'coffee']
  },
  {
    id: 9,
    name: 'Surf table',
    imageUrl: 'https://resourcefurniture.com/wp-content/uploads/2019/12/Surf-2.jpg',
    sku: 'SP000009',
    barcode: 'PRD000009',
    available: 32,
    stock: 35,
    reversed: 3,
    price: 12,
    cost: 4.56,
    currency: '$',
    category: {
      parent: 'tables',
      children: [
        'dinning',
        'coffee'
      ]
    },
    producer: {
      id: 1,
      name: 'ABC producer'
    },
    vender: {
      id: 1,
      name: 'XYZ vender'
    },
    brand: '',
    collection: '',
    weight: 10,
    calculationUnit: 'kg',
    tags: ['tables', 'table', 'dinning', 'coffee']
  },
  {
    id: 10,
    name: 'Surf table',
    imageUrl: 'https://resourcefurniture.com/wp-content/uploads/2019/12/Surf-2.jpg',
    sku: 'SP000010',
    barcode: 'PRD000010',
    available: 32,
    stock: 35,
    reversed: 3,
    price: 12,
    cost: 4.56,
    currency: '$',
    category: {
      parent: 'tables',
      children: [
        'dinning',
        'coffee'
      ]
    },
    producer: {
      id: 1,
      name: 'ABC producer'
    },
    vender: {
      id: 1,
      name: 'XYZ vender'
    },
    brand: '',
    collection: '',
    weight: 10,
    calculationUnit: 'kg',
    tags: ['tables', 'table', 'dinning', 'coffee']
  },
  {
    id: 11,
    name: 'Surf table',
    imageUrl: 'https://resourcefurniture.com/wp-content/uploads/2019/12/Surf-2.jpg',
    sku: 'SP000011',
    barcode: 'PRD000011',
    available: 32,
    stock: 35,
    reversed: 3,
    price: 12,
    cost: 4.56,
    currency: '$',
    category: {
      parent: 'tables',
      children: [
        'dinning',
        'coffee'
      ]
    },
    producer: {
      id: 1,
      name: 'ABC producer'
    },
    vender: {
      id: 1,
      name: 'XYZ vender'
    },
    brand: '',
    collection: '',
    weight: 10,
    calculationUnit: 'kg',
    tags: ['tables', 'table', 'dinning', 'coffee']
  },
  {
    id: 12,
    name: 'Surf table',
    imageUrl: 'https://resourcefurniture.com/wp-content/uploads/2019/12/Surf-2.jpg',
    sku: 'SP000012',
    barcode: 'PRD000012',
    available: 32,
    stock: 35,
    reversed: 3,
    price: 12,
    cost: 4.56,
    currency: '$',
    category: {
      parent: 'tables',
      children: [
        'dinning',
        'coffee'
      ]
    },
    producer: {
      id: 1,
      name: 'ABC producer'
    },
    vender: {
      id: 1,
      name: 'XYZ vender'
    },
    brand: '',
    collection: '',
    weight: 10,
    calculationUnit: 'kg',
    tags: ['tables', 'table', 'dinning', 'coffee']
  },
];

export const dataSource = data.map(item => { return { ...item, 'key': item.id } });
