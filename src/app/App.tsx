import React, { ReactElement, useEffect } from 'react';

import schemaData from './data/schema.json';
import { SchemaType } from './types';

const App = (): ReactElement => {
  const schema = schemaData as SchemaType;

  useEffect(() => {});

  return <div />;
};

export default App;
