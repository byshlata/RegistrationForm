import React, { ReactElement, useEffect } from 'react';

import schemaData from '../data/schema.json';
import mainStyle from '../styles/container.module.sass';

import styles from './App.module.sass';

import { Footer, Header } from 'components';
import { useAppDispatch } from 'hooks';
import { Routers } from 'pages';
import { setSchemaData } from 'store';
import { SchemaType } from 'types';

export const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const schema = schemaData as SchemaType;
    dispatch(setSchemaData(schema));
  }, []);

  return (
    <div className={styles.appWrapper}>
      <Header />

      <div className={mainStyle.mainContainer}>
        <div className={mainStyle.container}>
          <Routers />
        </div>
      </div>
      <Footer />
    </div>
  );
};
