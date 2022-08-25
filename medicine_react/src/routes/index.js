import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';

//import ErrorRoutes from './ErrorRoutes';



// ==============================|| ROUTING RENDER ||============================== //
const routes = [MainRoutes,LoginRoutes];
const AllExcludeBreadcrumbPath = ['/'];
export default function ThemeRoutes() {
  return useRoutes(routes);
}
export { routes as AllRoutes, AllExcludeBreadcrumbPath };
