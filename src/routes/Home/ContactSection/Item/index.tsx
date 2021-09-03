import React, { useState, useEffect, memo } from 'react';
import PropType, { InferProps } from 'prop-types';
import './styled.css';

const ItemPropTypes = {
  type: PropType.oneOf(['github', 'linkin']).isRequired,
  url: PropType.string.isRequired
};

export type ItemType = InferProps<typeof ItemPropTypes>;

const Item = ({ type, url } : ItemType) => {
  const [img, setImg] = useState('');

  useEffect(() => {
    import(`../../../../assets/icons/${type}.svg`).then((image) => {
      setImg(image.default);
    });
  }, [type]);

  return (
    <li className="item-container">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="item-container-img" src={img} alt={`contact me ${type}`}/>
      </a>
    </li>
  );
};

export default memo(Item);
