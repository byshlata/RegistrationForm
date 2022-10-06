import React, { memo } from 'react';

import style from './Title.module.sass';

type TitleType = {
  text: string;
};

export const Title = memo(({ text }: TitleType) => (
  <h2 className={style.title}>{text}</h2>
));
