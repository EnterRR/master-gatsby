import React from 'react';
import Layout from './src/components/Layout';

import 'normalize.css';

const wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Layout {...props}>{element}</Layout>
);

export { wrapPageElement };
