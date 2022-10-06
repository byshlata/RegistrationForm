import { ReactElement } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Path } from 'enums';
import { Page404, PersonalInformation, Profile, SingUp } from 'pages';

export const Routers = (): ReactElement => {
  const SING_PAGE = <Navigate to={`${Path.Registration}${Path.SingUp}`} />;

  return (
    <Routes>
      <Route path={`${Path.Other}`} element={<Page404 />} />
      <Route path={`${Path.Root}`} element={SING_PAGE} />
      <Route path={`${Path.Registration}${Path.SingUp}`} element={<SingUp />} />
      <Route path={`${Path.Registration}${Path.SingUp}`} element={<SingUp />} />
      <Route path={`${Path.Profile}`} element={<Profile />} />
      <Route
        path={`${Path.Registration}${Path.PersonalInformation}`}
        element={<PersonalInformation />}
      />
    </Routes>
  );
};
