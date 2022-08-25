import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
// project import
import Loadable from '@components/LayoutComponents/Loadable';
// import BreadcrumbLayout from '@layout/BreadcrumbLayout/';
const LandingPage = Loadable(lazy(() => import('@pages/Landing')));

// ==============================|| MAIN ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: (<Outlet/>
  ),
  children: [
     {
      path: '',
      element: <LandingPage />,
      breadcrumb: 'navigation.landing',
    },/*
    {
      path: 'dashboard',
      element: <DashboardDefault />,
      breadcrumb: 'navigation.dashboard',
    },MainRoutes
    {
      path: '/search/result/:resultId',
      element: <ItemHistoryResultPage />,
      breadcrumb: 'navigation.searchresult',
    },
    {
      path: 'upload',
      element: <FileUploadTest />,
      breadcrumb: 'navigation.upload',
    }, */
  ],
};

export default LoginRoutes;
