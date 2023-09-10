import React, { MouseEvent } from 'react';
import { ConfigureItemProps } from '../../types/ColorWarsProps';

const ConfigureItem = (props: ConfigureItemProps) => {
  const onclickEv = (ev: MouseEvent) => {
    ev.preventDefault();
    if (props.active !== props.value) props.setActive(props.value);
  };
  return (
    <div onClick={onclickEv} className={`item ${props.active === props.value ? 'activeItem' : ''}`}>
      {props.str}
    </div>
  );
};

export default ConfigureItem;
