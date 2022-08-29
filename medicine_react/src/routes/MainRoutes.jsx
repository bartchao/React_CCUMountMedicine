import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
// project import
import Loadable from '@components/LayoutComponents/Loadable';
import MainLayout from 'src/layout/MainLayout/index';
import LandingPage from 'src/pages/Landing';
// import BreadcrumbLayout from '@layout/BreadcrumbLayout/';
const CalculatePage = Loadable(lazy(() => import('@pages/Calculate')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: (<MainLayout><Outlet/></MainLayout>
  ),
  children: [
    {
      path: '/calc',
      element: <CalculatePage />,
      breadcrumb: 'navigation.calc',
    },
    {
      path: '',
      element: <LandingPage />
      
    }/*
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

export default MainRoutes;
