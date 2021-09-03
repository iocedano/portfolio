import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Item, { ItemType } from './Item';

const ContactSectionPropTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    url: PropTypes.string
  })),
  email: PropTypes.string.isRequired
};

type ContactSectionType = InferProps<typeof ContactSectionPropTypes | { points: [ItemType], email: String }>;

const ContactSection = ({ points, email } : ContactSectionType) =>(
  <section className="contactsection-container">
    <h2 className="contactsection-headeline">Contact</h2>
    <h3 className="contactsection-headeline-2">Let&apos;s create your next experience together</h3>
    <a className="contactsection-email-link" href={`mailto:${email}`}>{email}</a>
    <ul className="constactsection-list">
      {Array.isArray(points) && points.map(({ type, url }) => (<Item key={type} type={type} url={url} />))}
    </ul>
  </section>
);

ContactSection.propTypes = ContactSectionPropTypes;

ContactSection.defaultProps = {
  points: []
};

export default ContactSection;
