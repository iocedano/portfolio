import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Skill, { SkillType } from './Skill';
import './styled.css';

const SkillSectionPropTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    description: PropTypes.string
  }))
};

type SkillSectionType = InferProps<typeof SkillSectionPropTypes | { skills: [SkillType] }>;

const SkillSection = ({ skills } : SkillSectionType) => (
  <section className="skillsection-container">
    <h2 className="skillsection-header">Skills</h2>
    <ul className="skillsection-list">
      {Array.isArray(skills) && skills.map(({type, description}) => (
        <Skill key={type} type={type} description={description} />
      ))}
    </ul>
  </section>
);

SkillSection.propTypes = SkillSectionPropTypes;

SkillSection.defaultProps = {
  skills: []
};

export default SkillSection;
