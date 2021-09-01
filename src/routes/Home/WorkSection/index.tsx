import React from 'react';
import PropTypes, { InferProps } from 'prop-types'
import Job, { JobPropTypes, JobTypes } from '../../../components/Job';
import './styled.css';

const WorkSectionPropTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape(JobPropTypes))
}

type WorkSectionType = InferProps<typeof WorkSectionPropTypes | { jobs: JobTypes }>;

const WorkSection = ({ jobs } : WorkSectionType) => (
  <section className="work-section-content">
    <h2 className="word-section-header">Work</h2>
    <div className="work-section-grid">{
      Array.isArray(jobs) && jobs.map(({ id, title, company, description }) =>
        <Job
          key={id}
          title={title}
          company={company}
          description={description}
        />
      )
    }</div>
  </section>
);

WorkSection.propTypes = WorkSectionPropTypes;

WorkSection.defaultProps = {
  jobs: []
}

export default WorkSection;
