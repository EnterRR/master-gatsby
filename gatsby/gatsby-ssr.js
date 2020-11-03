import React from 'react';
import Layout from './src/components/Layout';

const wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Layout {...props}>{element}</Layout>
);

export { wrapPageElement };
