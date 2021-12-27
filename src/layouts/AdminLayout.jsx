import React from 'react';
import ProLayout from '@ant-design/pro-layout';
import { connect, Link, useIntl } from 'umi';
import Authorized from '@/utils/Authorized';

import logo from '../assets/logo.svg';
import showcase from '../assets/icons/home.svg';
import styles from './AdminLayout.less';

const icons = { showcase };

const AdminLayout = (props) => {
  // <div className={styles.adminLayout}>
  //   <div className="left-panel" >
  //     <Link className={styles.logo} to="/"><img src={logo } alt="logo" /></Link>
  //   </div>
  //   <div className="main-content">
  //     {children}
  //   </div>
  // </div>

  /**
   * use Authorized check all menu item
   */
  const menuDataRender = (menuList) =>
    menuList.map((item) => {
      const localItem = { ...item, children: item.children ? menuDataRender(item.children) : [] };
      return Authorized.check(item.authority, localItem, null);
    });

  const { formatMessage } = useIntl();

  return (
    <ProLayout
      className={styles.adminLayout}
      logo={logo}
      formatMessage={formatMessage}
      menuHeaderRender={(logoDom) => (
        <>
          <Link className={styles.logo} to="/">
            {logoDom}
          </Link>
        </>
      )}
      menuItemRender={(menuItemProps, defaultDom) => {
        const { key, name } = menuItemProps;
        const customDom =
          key && Object.keys(icons).includes(key) ? (
            <span className={styles.antMenuItemInner}>
              <img src={icons[key]} alt={name} /> {name}
            </span>
          ) : (
            defaultDom
          );
        if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
          return customDom;
        }

        return <Link to={menuItemProps.path}>{customDom}</Link>;
      }}
      menuDataRender={menuDataRender}
      breakpoint="sm"
      fixSiderbar
      {...props}
    >
      {/* <Authorized authority={authorized.authority} noMatch={noMatch}> */}
        {props.children}
      {/* </Authorized> */}
    </ProLayout>
  );
};

export default connect(({ settings }) => ({ settings }))(AdminLayout);
