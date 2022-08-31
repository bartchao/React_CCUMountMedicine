import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
//import ErrorRoutes from './ErrorRoutes';



// ==============================|| ROUTING RENDER ||============================== //
const routes = [MainRoutes];
const AllExcludeBreadcrumbPath = ['/'];
export default function ThemeRoutes() {
  return useRoutes(routes);
}
export { routes as AllRoutes, AllExcludeBreadcrumbPath };
