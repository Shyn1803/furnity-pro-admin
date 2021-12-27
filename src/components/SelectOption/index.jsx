import React from 'react';
import { Select } from 'antd';
import ArrowDownIcon from '@/icons/arrowDown';
import classNames from 'classnames';
import styles from './index.less';

const { Option } = Select;

const SelectOption = (props) => {
  const {
    className,
    dropdownClassName,
    defaultValue,
    options,
    allOption,
    onChange
  } = props;

  const handleChange = (_, option) => {
    if(onChange) {
      onChange(option);
    }
  };

  const containerClassNames = classNames(styles.selectOptionContainer, className || '');
  const dropdownClassNames = classNames(styles.dropdownContainer, dropdownClassName || '');

  return (
    <Select
      defaultValue={defaultValue || allOption ? allOption?.value : options?.[0]?.value}
      onChange={handleChange}
      dropdownClassName={dropdownClassNames}
      className={containerClassNames}
      suffixIcon={<ArrowDownIcon />}
    >
      {allOption ? <Option value={allOption.value} key={allOption.key}>{allOption.value}</Option> : null}
      {options?.map((option) => {
        return <Option value={option.value} key={option.key}>{option.value}</Option>
      })}
    </Select>
  )
}

export default SelectOption;
