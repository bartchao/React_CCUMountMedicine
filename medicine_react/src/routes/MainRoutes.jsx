import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
// project import
import Loadable from '@components/LayoutComponents/Loadable';
// import BreadcrumbLayout from '@layout/BreadcrumbLayout/';
import LandingPage from '@pages/Landing';


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: (<Outlet/>
  ),
  children: [
     {
      path: '',
      element: <LandingPage />,
      breadcrumb: 'navigation.report',
    },/*
    {
      path: '/search',
      element: <SearchPage />,
      breadcrumb: 'navigation.search',
    },
    {
      path: 'dashboard',
      element: <DashboardDefault />,
      breadcrumb: 'navigation.dashboard',
    },
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

export default MainRoutes;
