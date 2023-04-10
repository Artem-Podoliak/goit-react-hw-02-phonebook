import React from 'react';
import PropTypes from 'prop-types';

function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <div>
      <p>{name}:</p>
      <a href={`tel:${number}`}>{number}</a>
      <button type="buton" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
