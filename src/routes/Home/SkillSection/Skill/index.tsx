import React, { useEffect, useState, memo } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import validIcons from '../../../../config/validicons.json';
import './styled.css';

const SkillPropsTypes = {
  type: PropTypes.oneOf(validIcons.list).isRequired,
  description: PropTypes.string
};

export type SkillType = InferProps<typeof SkillPropsTypes>;

const Skill = ({ type, description } : SkillType) => {
  const [img, setImg] = useState('');

  useEffect(() => {
    import(`../../../../assets/icons/${type}.svg`).then((image) => {
      setImg(image.default);
    });
  }, [type]);

  return (
    <li className="skill-item">
      <div className="skill-item-img-content">
        <img className="skill-item-img" src={img} alt={`skill know job with require ${type} developer`} />
      </div>
      {description && (
        <p className="skill-item-description">{description}</p>
      )}
    </li>
  );
};

Skill.propTypes = SkillPropsTypes;

Skill.defaultProps = {
  description: undefined
}

export default memo(Skill);
