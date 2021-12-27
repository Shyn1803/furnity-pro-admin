import React, { useState, useEffect, createRef } from 'react';
import Search from '@/components/Search'
import { Table, Popover, Menu, Drawer, Button, Form, Input } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
// import { dataSource } from '@/utils/FakeDataTable';
import { options, allOption } from '@/utils/constants';
import SelectOption from '@/components/SelectOption';
import InputComponent from '@/components/InputComponent';
import MoreActionIcon from '@/icons/moreAction';
import EditIcon from '@/icons/edit';
import SettingIcon from '@/icons/setting';
// import ArrowDownIcon from '@/icons/arrowDown';
import { connect } from 'dva';

import styles from './Products.less';

const Products = (props) => {
  const intl = useIntl();
  const formRef = createRef();
  const { dispatch, product, UpdatingValueRowExpended, fetchingProducts } = props;
  const { products } = product;

  useEffect(() => {
    return dispatch({
      type: 'product/fetchProducts'
    });
  }, [dispatch]);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const [visibleDrawer, setVisibleDrawer] = useState(false);


  const onShowDrawer = () => {
    setVisibleDrawer(true);
  };
  const onCloseDrawer = () => {
    setVisibleDrawer(false);
  };

  const onAdvanceEdit = (id) => {
    // TODO: Shyn: Go to edit product page by id.
    console.log('TODO: Go to edit product page by id: ', id);
  }

  const onTableRowExpand = (expanded, record) => {
    const keys = [];
    if (expanded) {
      keys.push(record.id);
    }

    setExpandedRowKeys(keys);
  }

  const handleChangeValue = (value) => {
    console.log('value: ', value)
  }

  const mappingInput = (params) => {
    // console.log('className: ', params.className)
    return <InputComponent className={params.className} title={params.title} id={params.id} value={params.value} onChange={handleChangeValue()} />
  }

  const mappingInputValue = {
    productName: {
      className: 'product-name',
      title: 'Product name',
      id: 'product-name',
      placeholder: ''
    },
    sku: {
      className: 'sku',
      title: 'SKU',
      id: 'sku',
      placeholder: ''
    },
    barcode: {
      className: 'barcode',
      title: 'Barcode',
      id: 'barcode',
      placeholder: ''
    },
    stock: {
      className: 'stock',
      title: 'Stock',
      id: 'stock',
      placeholder: ''
    },
    site: {
      className: 'site',
      title: 'Site',
      id: 'site',
      placeholder: ''
    },
    reserved: {
      className: 'reserved',
      title: 'Reserved',
      id: 'reserved',
      placeholder: ''
    },
    price: {
      className: 'price',
      title: 'Price',
      id: 'price',
      placeholder: ''
    },
    brand: {
      className: 'brand',
      title: 'Brand',
      id: 'brand',
      placeholder: ''
    },
    cost: {
      className: 'cost',
      title: 'Cost',
      id: 'cost',
      placeholder: ''
    },
    collection: {
      className: 'collection',
      title: 'Collection',
      id: 'collection',
      placeholder: ''
    },
    weight: {
      className: 'weight',
      title: 'Weight',
      id: 'weight',
      placeholder: ''
    },
    tags: {
      className: 'tags',
      title: 'Tags',
      id: 'tags',
      placeholder: ''
    }
  }

  const onFinish = (values) => {
    console.log('onFinish: ', values);
  }

  // TODO: Shyn
  const onExpandedRowRenderTest = (record) => {
    return (
      <div className={styles.rowRenderContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={record.imageUrl} alt='site' width='150px' />
          </div>
          <div className={styles.controls}>
            1 of 3
          </div>
          <div className={styles.addImage}>
            <FormattedMessage id="pages.product.addImage" defaultMessage="+ Add image" />
          </div>
        </div>
        <div className={styles.informationWrapper}>
          <Form
            name="basic"
            ref={formRef}
            initialValues={{'product-name-3': 'ajsdv'}}
            onFinish={onFinish}
          >
            <div className="info-left">
              <div className="row-wrapper">
                <div className="product-name-wrapper item">
                  {/* <Form.Item
                    name={`${mappingInputValue?.productName?.id}-${record?.id}`}
                  > */}
                    <InputComponent className={mappingInputValue?.productName?.className} title={mappingInputValue?.productName?.title} id={`${mappingInputValue?.productName?.id}-${record?.id}`} Form={Form} />
                    {/* <Input /> */}
       
                  {/* </Form.Item> */}
                </div>
              </div>
              {/* <div className="row-wrapper">
                <div className="sku-wrapper item">
                  <Form.Item
                    name={`${mappingInputValue?.sku?.id}-${record?.id}`}
                  >
                    <InputComponent className={mappingInputValue?.sku?.className} title={mappingInputValue?.sku?.title} id={`${mappingInputValue?.sku?.id}-${record?.id}`} />
                  </Form.Item>
                </div>
                <div className="barcode-wrapper item">
                  <Form.Item
                    name={`${mappingInputValue?.barcode?.id}-${record?.id}`}
                  >
                    <InputComponent className={mappingInputValue?.barcode?.className} title={mappingInputValue?.barcode?.title} id={`${mappingInputValue?.barcode?.id}-${record?.id}`} />
                  </Form.Item>
                </div>
              </div>
              <div className="row-wrapper">
                <div className="stock-wrapper item">
                  <Form.Item
                    name={`${mappingInputValue?.stock?.id}-${record?.id}`}
                  >
                    <InputComponent className={mappingInputValue?.stock?.className} title={mappingInputValue?.stock?.title} id={`${mappingInputValue?.stock?.id}-${record?.id}`} />
                  </Form.Item>
                </div>
                <div className="site-wrapper item">
                  <Form.Item
                    name={`${mappingInputValue?.site?.id}-${record?.id}`}
                  >
                    <InputComponent className={mappingInputValue?.site?.className} title={mappingInputValue?.site?.title} id={`${mappingInputValue?.site?.id}-${record?.id}`} />
                  </Form.Item>
                </div>
                <div className="reserved-wrapper item">
                  <Form.Item
                    name={`${mappingInputValue?.reserved?.id}-${record?.id}`}
                  >
                    <InputComponent className={mappingInputValue?.reserved?.className} title={mappingInputValue?.reserved?.title} id={`${mappingInputValue?.reserved?.id}-${record?.id}`} />
                  </Form.Item>
                </div>
              </div> */}
            </div>
            {/* <div className="info-right">
              <div className="row-wrapper">
                <div className="price-wrapper item">
                  <Form.Item
                    name={`${mappingInputValue?.price?.id}-${record?.id}`}
                  >
                    <InputComponent className={mappingInputValue?.price?.className} title={mappingInputValue?.price?.title} id={`${mappingInputValue?.price?.id}-${record?.id}`} />
                  </Form.Item>
                </div>
                <div className="brand-wrapper item">
                  <Form.Item
                    name={`${mappingInputValue?.brand?.id}-${record?.id}`}
                  >
                    <InputComponent className={mappingInputValue?.brand?.className} title={mappingInputValue?.brand?.title} id={`${mappingInputValue?.brand?.id}-${record?.id}`} />
                  </Form.Item>
                </div>
              </div>
              <div className="row-wrapper">
                <div className="cost-wrapper item">
                  <Form.Item
                    name={`${mappingInputValue?.cost?.id}-${record?.id}`}
                  >
                    <InputComponent className={mappingInputValue?.cost?.className} title={mappingInputValue?.cost?.title} id={`${mappingInputValue?.cost?.id}-${record?.id}`} />
                  </Form.Item>
                </div>
                <div className="collection-wrapper item">
                  <Form.Item
                    name={`${mappingInputValue?.collection?.id}-${record?.id}`}
                  >
                    <InputComponent className={mappingInputValue?.collection?.className} title={mappingInputValue?.collection?.title} id={`${mappingInputValue?.collection?.id}-${record?.id}`} />
                  </Form.Item>
                </div>
              </div>
              <div className="row-wrapper">
                <div className="weight-wrapper item">
                  <Form.Item
                    name={`${mappingInputValue?.weight?.id}-${record?.id}`}
                  >
                    <InputComponent className={mappingInputValue?.weight?.className} title={mappingInputValue?.weight?.title} id={`${mappingInputValue?.weight?.id}-${record?.id}`} />
                  </Form.Item>
                </div>
                <div className="tags-wrapper item">
                  <Form.Item
                    name={`${mappingInputValue?.tags?.id}-${record?.id}`}
                  >
                    <InputComponent className={mappingInputValue?.tags?.className} title={mappingInputValue?.tags?.title} id={`${mappingInputValue?.tags?.id}-${record?.id}`} />
                  </Form.Item>
                </div>
              </div>
            </div> */}
          </Form>
        </div>
      </div>
    )
  }

  const onExpandedRowRender = (record) => {
    return <div className={styles.rowRenderContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img src={record.imageUrl} alt='site' width='150px' />
        </div>
        <div className={styles.controls}>
          1 of 3
        </div>
        <div className={styles.addImage}>
          <FormattedMessage id="pages.product.addImage" defaultMessage="+ Add image" />
        </div>
      </div>
      <div className={styles.informationWrapper}>
        <div className={styles.infoLeft}>
          <div className={styles.rowWrapper}>
            <div className={`${styles.productNameWrapper} ${styles.item}`}>
              {mappingInput(Object.assign(mappingInputValue?.productName, { id: `${mappingInputValue?.productName?.id}-${record?.id}`, value: record?.name }))}
              {/* <InputComponent className={styles.productName} title="Product name" id='productName' value='abc' /> */}
            </div>
          </div>
          <div className={styles.rowWrapper}>
            <div className={`${styles.skuWrapper} ${styles.item}`}>
              {/* {mappingInput({ className: 'sku', title: 'Product name', id: record.id, value: record?.name })} */}
              <InputComponent className={styles.sku} title="SKU" id='sku' />
            </div>
            <div className={`${styles.barcodeWrapper} ${styles.item}`}>
              <InputComponent className={styles.barcode} title="Barcode" id='barcode' />
            </div>
          </div>
          <div className={styles.rowWrapper}>
            <div className={`${styles.stockWrapper} ${styles.item}`}>
              <InputComponent className={styles.stock} title="Stock" id='stock' />
            </div>
            <div className={`${styles.siteWrapper} ${styles.item}`}>
              <InputComponent className={styles.site} title="Site" id='site' />
            </div>
            <div className={`${styles.reservedWrapper} ${styles.item}`}>
              <InputComponent className={styles.reserved} title="Reserved" id='reserved' />
            </div>
          </div>
        </div>
        <div className={styles.infoRight}>
          <div className={styles.rowWrapper}>
            <div className={`${styles.priceWrapper} ${styles.item}`}>
              <InputComponent className={styles.price} title="Price" id='price' />
            </div>
            <div className={`${styles.brandWrapper} ${styles.item}`}>
              <InputComponent className={styles.brand} title="Brand" id='brand' />
            </div>
          </div>
          <div className={styles.rowWrapper}>
            <div className={`${styles.costWrapper} ${styles.item}`}>
              <InputComponent className={styles.cost} title="Cost" id='cost' />
            </div>
            <div className={`${styles.collectionWrapper} ${styles.item}`}>
              <InputComponent className={styles.collection} title="Collection" id='collection' />
            </div>
          </div>
          <div className={styles.rowWrapper}>
            <div className={`${styles.weightWrapper} ${styles.item}`}>
              <InputComponent className={styles.weight} title="Weight" id='weight' />
            </div>
            <div className={`${styles.tagsWrapper} ${styles.item}`}>
              <InputComponent className={styles.tags} title="Tags" id='tags' />
            </div>
          </div>
        </div>
      </div>
    </div>
  }

  const onSelectChange = selected => {
    setSelectedRowKeys(selected);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleSearch = (value) => {
    console.log('search: ', value);
  }

  const moreActionContent = (
    <Menu>
      <Menu.Item><FormattedMessage id="pages.product.stopBusiness" defaultMessage="Stop business" /></Menu.Item>
      {/*
        // TODO: Shyn: check if else what state of the product to decide business or not
        <Menu.Item><FormattedMessage id="pages.product.businessAgain" defaultMessage="Business again" /></Menu.Item>
      */}
      <Menu.Item><FormattedMessage id="pages.product.delete" defaultMessage="Delete this product" /></Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: '',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: imageUrl => <div className="image-wrapper">
        <img src={imageUrl} alt='site' width='50px' height='50px' />
      </div>
    },
    {
      title: <FormattedMessage id="productTable.sku" defaultMessage="SKU" />,
      dataIndex: 'sku',
      key: 'sku'
    },
    {
      title: <FormattedMessage id="productTable.product" defaultMessage="Product" />,
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: <FormattedMessage id="productTable.available" defaultMessage="Available" />,
      dataIndex: 'available',
      key: 'available'
    },
    {
      title: <FormattedMessage id="productTable.stock" defaultMessage="Stock" />,
      dataIndex: 'stock',
      key: 'stock'
    },
    {
      title: <FormattedMessage id="productTable.price" defaultMessage="Price" />,
      dataIndex: 'price',
      key: 'price',
      render: (_, record) => <div><span>{record.currency}</span><span>{record.price}</span></div>
    },
    {
      title: <FormattedMessage id="productTable.category" defaultMessage="Category" />,
      dataIndex: 'category',
      key: 'category',
      render: () => <div>Need custom allow format!</div>
    },
    {
      title: <FormattedMessage id="productTable.producer" defaultMessage="Producer" />,
      dataIndex: 'producer',
      key: 'producer',
      render: item => item ? item.name : 'No producer'
    },
    {
      title: <FormattedMessage id="productTable.action" defaultMessage="Action" />,
      dataIndex: '',
      key: 'action',
      render: (_, record) =>
        <div className='action-row-container'>
          <Popover
            content={moreActionContent}
            overlayClassName={styles.popoverMoreAction}
            trigger='click'
          >
            <div className='icon-wrapper'>
              <MoreActionIcon />
            </div>
          </Popover>
          <div className='icon-wrapper' onClick={() => onAdvanceEdit(record?.id)}>
            <EditIcon />
          </div>
        </div>,
      onCell: () => ({
        onClick: (e) => {
          e.stopPropagation()
        }
      })
    },
  ];
  console.log('product: ', product);

  return (
    <div className={styles.productsWrapper}>
      <Search
        className={styles.searchHeaderProduct}
        placeholder={intl.formatMessage({
          id: 'pages.product.searchPlaceholder',
          defaultMessage: 'Enter product name or SKU',
        })}
        onSearch={handleSearch}
      />
      <h1 className={styles.title}>
        <FormattedMessage id="pages.product.product" defaultMessage="Product" />
      </h1>
      <div className={styles.advancedSetting}>
        <div className={styles.left}>
          <SelectOption options={options} allOption={allOption} />
        </div>
        <div className={styles.right}>
          <Button onClick={onShowDrawer} className={styles.buttonWrapper}>
            <div className={styles.iconWrapper}>
              <SettingIcon />
            </div>
            <FormattedMessage id="pages.product.advancedFilter" defaultMessage="Advanced filter" />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={onCloseDrawer}
            visible={visibleDrawer}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </div>
      </div>

      <Table
        loading={fetchingProducts}
        rowKey="id"
        rowSelection={rowSelection}
        dataSource={products}
        columns={columns}
        expandedRowKeys={expandedRowKeys}
        onExpand={onTableRowExpand}
        expandRowByClick
        expandable={{
          expandedRowRender: (record) => onExpandedRowRenderTest(record),
          expandIconColumnIndex: -1,
          expandIconAsCell: false
        }}
      />
    </div>
  );
};

export default connect(({ product, loading }) => ({
  product,
  fetchingProducts: loading.effects['product/fetchProducts'],
  UpdatingValueRowExpended: loading.effects['product/updateValueRowExpended'],
}))(Products);
