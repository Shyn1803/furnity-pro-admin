import React, { useState, createRef } from 'react';
import { Input } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

const InputComponent = (props) => {
  const {
    className,
    placeholder,
    defaultValue,
    disabled,
    onChange,
    value,
    title,
    id,
    Form
  } = props;

  const inputRef = createRef();
  // console.log('inputRef :', inputRef);
  console.log('Form: ', Form);

  const hasValue = value || value === 0 || value === 'false';

  const inputClass = classNames(styles.inputClass, className);
  const titleClass = classNames(styles.title, hasValue ? styles.active : '');

  return (
    <div className={styles.container}>
      <Form.Item>
        <Input
          ref={inputRef}
          // className={inputClass}
          // defaultValue={defaultValue}
          // placeholder={placeholder}
          // value={value}
          // onChange={handleChange}
          // disabled={disabled}
          id={id}
        />
        <label className={titleClass} htmlFor={id}>{title}</label>
      </Form.Item>
    </div>
  )
}

export default InputComponent;
