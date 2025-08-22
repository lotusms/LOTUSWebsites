// components/StructuredData.tsx
import React from 'react';
import PropTypes from 'prop-types';

export default function StructuredData({ json }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
}

StructuredData.propTypes = {
  json: PropTypes.object.isRequired,
};
