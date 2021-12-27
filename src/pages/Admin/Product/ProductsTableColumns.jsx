import React from 'react';
import MoreActionIcon from '@/icons/moreAction';
import ArrowDownIcon from '@/icons/arrowDown';

const Columns = (props) => {
  const { handleExpandedRowKeys } = props;
  const onHandleExpansion = (index) => {
    if (handleExpandedRowKeys) {
      handleExpandedRowKeys(index);
    }
  }
  
  return [
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
      render: (_, record, index) => <div className='action-row-container'>
        <div className='icon-wrapper'><MoreActionIcon /></div>
        <div className='icon-wrapper'>
          <div className='arrow-border'><ArrowDownIcon onClick={onHandleExpansion(index)}/></div>
        </div>
      </div>
    },
  ]
};

export default Columns;