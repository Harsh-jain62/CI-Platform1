import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { RoutePaths } from '../utility/enums/route.enums';
import { Login } from '../pages/Login';

interface RouteItem {
  id: number;
  path: string;
  component: FC<any>;
  
}

const routesList: RouteItem[] = [
  {
    id: 1,
    path: RoutePaths.Home,
    component: () => <Navigate to={RoutePaths.Login} />,
  
  },
  {
    id: 2,
    path: RoutePaths.Login,
    component: Login,
  
  },
];

const AppRoutes: FC = () => {
  const url = useLocation();
  const notShowURL = true;
  const showNavbar = !notShowURL.toString().includes(url.pathname);

  const getRootHtml = (): JSX.Element => (
    <Routes>
      {routesList.map((routeItem) => (
        <Route
          key={routeItem.id}
          path={routeItem.path}
          element={<routeItem.component />}
        />
      ))}
    </Routes>
  );

  return getRootHtml();
};

export default AppRoutes;
