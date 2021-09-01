import React, { memo } from "react";
import PropTypes, { InferProps } from 'prop-types';
import './styled.css';

export const JobPropTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  company: PropTypes.string.isRequired
}

export type JobTypes = InferProps<typeof JobPropTypes>;

const Job = ({
  title,
  description,
  company
}: JobTypes) => {
  const randomColor =  Math.floor(Math.random()*16777215).toString(16);

  return(
    <div className="job-content" data-id-test="a-job-test" style={{ backgroundColor: `#${randomColor}`}}>
      <h3 className="job-company">{company}</h3>
      <h4 className="job-title">Role: {title}</h4>
      {description && (
        <p className="job-description">{description}</p>
      )}
    </div>
  );
};

Job.propTypes = JobPropTypes;

Job.defaultProps = {
  description: '',
  id: ''
};

export default memo(Job);
