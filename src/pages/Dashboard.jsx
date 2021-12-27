import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Button } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import { connect } from 'dva';
import styles from './Dashboard.less';

const Welcome = (props) => {
  const intl = useIntl();
  const { dispatch } = props;

  const handleClickButton = () => {
    dispatch({
      type: 'product/getProducts'
    });
    console.log('click');
  };

  return (
    <>
      <Button onClick={() => handleClickButton()}>Click me</Button>
    </>
  );
};

export default connect(({ product }) => ({
  product,
}))(Welcome);
