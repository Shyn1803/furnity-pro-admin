import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import SearchIcon from '@/icons/search';
import classNames from 'classnames';
import styles from './index.less';

const SearchComponent = (props) => {
  const {
    autoCompleteClassName,
    className,
    onSearch,
    placeholder,
    defaultValue
  } = props;

  const [value, setValue] = useState(null);

  const inputClass = classNames(styles.inputClass, className);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(value);
    }
  }

  return (
    <AutoComplete
      key="AutoComplete"
      className={classNames(styles.autoCompleteContainer, autoCompleteClassName)}
      value={value}
      onChange={setValue}
    >
      <Input
        className={inputClass}
        defaultValue={defaultValue}
        aria-label={placeholder}
        placeholder={placeholder}
        prefix={<SearchIcon width='20px' onClick={() => handleSearch()}/>}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (onSearch) {
              onSearch(value);
            }
          }
        }}
      />
    </AutoComplete>
  )
}

export default SearchComponent;
